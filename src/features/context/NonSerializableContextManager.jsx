import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { useDispatch, useSelector } from 'react-redux';
import NonSerializableContext from './NonSerializableContext';
import { endCuboidEditing, execute, updateWithTranspilation } from '../executor/executorSlice';
import insertDecorators from '../editor/decorators/insertDecorators';
import { resetOptimizedParameters } from '../editor/editorSlice';
import { editorStateFromText, editorStateToText } from '../editor/draftUtilities';

const INITIAL_TEXT = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

// This holds all state that can't go into Redux because it's not serializable.
const NonSerializableContextManager = ({ children }) => {
  const dispatch = useDispatch();
  const optimizedParameters = useSelector((state) => state.editorSlice.optimizedParameters);
  const liveUpdatesEnabled = useSelector((state) => state.editorSlice.liveUpdatesEnabled);

  // These are the non-serializable pieces of state that can't go into Redux.
  const [metadata, setMetadata] = useState(undefined);
  const [ast, setAst] = useState(undefined);
  const [editorState, setEditorState] = useState(editorStateFromText(INITIAL_TEXT));
  const [selectedParameter, setSelectedParameter] = useState({});

  // This handles undo/redo.
  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const [undoAvailable, setUndoAvailable] = useState(false);
  const [redoAvailable, setRedoAvailable] = useState(false);

  // This is used to ensure that transpilation only runs when the text actually changes.
  const lastEditorText = useRef(undefined);
  const update = (newEditorState, forceRefresh, additionalInformation) => {
    // Get the new editor text.
    const editorText = editorStateToText(newEditorState);
    dispatch(endCuboidEditing());

    // Attempt transpilation if the text is different.
    let mostRecentMetadata = metadata;
    let mostRecentAst = ast;
    let mostRecentOptimizedParameters = additionalInformation?.optimizedParameters ?? optimizedParameters;
    if (editorText !== lastEditorText.current || forceRefresh) {
      if (!additionalInformation?.optimizedParameters) {
        dispatch(resetOptimizedParameters());
        mostRecentOptimizedParameters = undefined;
      }

      // Deselect any parameter sliders.
      if (!additionalInformation?.doNotTriggerParameterSliderDeselection) {
        setSelectedParameter({});
      }

      if (additionalInformation?.saveToHistory) {
        // Clear the redo stack (since taking an action means you can't redo).
        redoStack.current = [];
        undoStack.current.push(lastEditorText.current);
        setRedoAvailable(false);
        setUndoAvailable(true);
      }

      // Parse a new AST.
      mostRecentAst = new ShapeAssemblyParser().parseShapeAssemblyProgram(editorText);
      setAst(mostRecentAst);

      // Transpile the AST.
      const transpiled = new Transpiler().transpile(mostRecentAst);
      mostRecentMetadata = transpiled?.metadata ?? metadata;
      if (transpiled) {
        delete transpiled.metadata;
      }
      setMetadata(mostRecentMetadata);
      dispatch(updateWithTranspilation(transpiled));

      // If transpilation succeeds, call the executor.
      if (transpiled && transpiled.text && (liveUpdatesEnabled || forceRefresh)) {
        dispatch(execute(transpiled.text));
      }
    }
    lastEditorText.current = editorText;

    setEditorState(insertDecorators(newEditorState, mostRecentAst, mostRecentOptimizedParameters, mostRecentMetadata));
  };

  // This is used to change the visible cuboids without changing the editor text.
  const updateCuboidsSilently = (editorText) => {
    const silentAst = new ShapeAssemblyParser().parseShapeAssemblyProgram(editorText);
    const transpiled = new Transpiler().transpile(silentAst);
    if (transpiled && transpiled.text) {
      dispatch(execute(transpiled.text));
    }
  };

  const undoHistory = () => {
    const text = undoStack.current.pop();
    if (!text) {
      return;
    }
    redoStack.current.push(lastEditorText.current);
    update(editorStateFromText(text), true);
    setRedoAvailable(true);
    setUndoAvailable(undoStack.current.length > 0);
  };
  const redoHistory = () => {
    const text = redoStack.current.pop();
    if (!text) {
      return;
    }
    undoStack.current.push(lastEditorText.current);
    update(editorStateFromText(text), true);
    setRedoAvailable(redoStack.current.length > 0);
    setUndoAvailable(true);
  };

  return (
    <NonSerializableContext.Provider
      value={{
        ast,
        setAst,
        editorState,
        setEditorState: (newEditorState, additionalInformation) => update(newEditorState, false, additionalInformation),
        forceRefresh: () => update(editorState, true),
        updateCuboidsSilently,
        selectedParameter,
        setSelectedParameter, // The selected parameter is an object containing start and end (the token).
        metadata,

        // These functions are for undo/redo for the parameter sliders.
        // The text editing interface already has built-in undo/redo and doesn't use this system.
        undoHistory,
        redoHistory,
        undoAvailable,
        redoAvailable,
      }}
    >
      {children}
    </NonSerializableContext.Provider>
  );
};

NonSerializableContextManager.propTypes = {
  children: PropTypes.node,
};

NonSerializableContextManager.defaultProps = {
  children: null,
};

export default NonSerializableContextManager;
