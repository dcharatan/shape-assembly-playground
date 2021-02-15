import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { useDispatch, useSelector } from 'react-redux';
import NonSerializableContext from './NonSerializableContext';
import { endCuboidEditing, execute, updateWithTranspilation } from '../executor/executorSlice';
import insertDecorators from '../editor/decorators/insertDecorators';
import { deselectAllLines, resetOptimizedParameters } from '../editor/editorSlice';
import { editorStateFromText, editorStateToText } from '../editor/draftUtilities';
import { setTargetCode, setUsernameAndStudyCondition } from '../editing-task/editingTaskSlice';
import { getBaseUrl } from '../../environment';
import { getEditingTask } from '../editing-task/getEditingTask';
import getSubassemblyBounds, { getSubassemblyBoundClamps } from '../editing-task/getSubassemblyBounds';
import { mapToObject } from '../../utilities';

export const getTranspilerSettings = () => ({
  doBboxAttachPostprocessing:
    window.location.pathname.includes('editing-task') || window.location.pathname.includes('naming-task'),
  doBboxParamSubstitution: true,
});

const INITIAL_TEXT = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

const TIME_PER_EDITING_TASK = 600;

export const postActionStack = (username, taskIndex, actionStack) =>
  fetch(`${getBaseUrl()}/save-editing-task`, {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      username,
      actionStack,
      taskIndex,
    }),
  });

// This holds all state that can't go into Redux because it's not serializable.
const NonSerializableContextManager = ({ children }) => {
  const dispatch = useDispatch();
  const optimizedParameters = useSelector((state) => state.editorSlice.optimizedParameters);
  const liveUpdatesEnabled = useSelector((state) => state.editorSlice.liveUpdatesEnabled);

  // These are the non-serializable pieces of state that can't go into Redux.
  const [metadata, setMetadata] = useState(undefined);
  const [ast, setAst] = useState(undefined);
  const [editorState, setEditorState] = useState(editorStateFromText(INITIAL_TEXT));
  const [prefix, setPrefix] = useState(''); // This is prepended to the text sent to the transpiler.
  const [selectedParameter, setSelectedParameter] = useState({});

  // This handles undo/redo.
  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const [undoAvailable, setUndoAvailable] = useState(false);
  const [redoAvailable, setRedoAvailable] = useState(false);

  // This records all states (so do then undo would add 2 states).
  const actionStack = useRef([]);
  const pushAction = (editorText) => {
    actionStack.current.push({
      editorText,
      timestamp: Date.now(),
    });
  };

  // This is used for the editing task.
  // It's here because it gets changed each time transpilation happens.
  const [subassemblyBounds, setSubassemblyBounds] = useState({});
  const [secondsRemaining, setSecondsRemaining] = useState(TIME_PER_EDITING_TASK);
  const [showingTimeWarning, setShowingTimeWarning] = useState(false);

  // These are clamped parameters that temporarrily have to be faked.
  const [fakeParameters, setFakeParameters] = useState([]);

  // This is used to ensure that transpilation only runs when the text actually changes.
  const lastEditorText = useRef(undefined);
  const update = (newEditorState, forceRefresh, additionalInformation) => {
    // Get the new editor text.
    const editorText = editorStateToText(newEditorState);
    dispatch(endCuboidEditing());

    // Clear the fake parameters.
    // Leftover fake parameters will cause incorrect highlights.
    setFakeParameters([]);

    // Attempt transpilation if the text is different.
    let mostRecentMetadata = metadata;
    let mostRecentAst = ast;
    let mostRecentOptimizedParameters = additionalInformation?.optimizedParameters ?? optimizedParameters;
    if (editorText !== lastEditorText.current || forceRefresh) {
      if (!additionalInformation?.optimizedParameters) {
        dispatch(resetOptimizedParameters());
        mostRecentOptimizedParameters = undefined;
      }

      // Deselect all lines. This is because line selections might change if the text does.
      dispatch(deselectAllLines());

      // Deselect any parameter sliders.
      if (!additionalInformation?.doNotTriggerParameterSliderDeselection) {
        setSelectedParameter({});
      }

      if (additionalInformation?.saveToHistory) {
        // Clear the redo stack (since taking an action means you can't redo).
        redoStack.current = [];
        undoStack.current.push(lastEditorText.current);
        pushAction(editorText);
        setRedoAvailable(false);
        setUndoAvailable(true);
      }

      if (additionalInformation?.prefix) {
        setPrefix(additionalInformation.prefix);
      }

      // Parse a new AST.
      mostRecentAst = new ShapeAssemblyParser().parseShapeAssemblyProgram(
        editorText,
        additionalInformation?.prefix ?? prefix
      );
      setAst(mostRecentAst);

      // Transpile the AST.
      const transpiled = new Transpiler().transpile(mostRecentAst, getTranspilerSettings());
      mostRecentMetadata = transpiled?.metadata ?? metadata;
      if (transpiled) {
        delete transpiled.metadata;

        // Convert assemblyMap to a JS object so that it's serializable.
        transpiled.assemblyMap = mapToObject(transpiled.assemblyMap);
      }
      setMetadata(mostRecentMetadata);
      dispatch(updateWithTranspilation(transpiled));

      // If transpilation succeeds, call the executor.
      if (transpiled && transpiled.text && (liveUpdatesEnabled || forceRefresh)) {
        setSubassemblyBounds(getSubassemblyBounds(transpiled));
        dispatch(execute(transpiled.text));
      }
    }
    lastEditorText.current = editorText;

    setEditorState(
      insertDecorators(newEditorState, mostRecentAst, mostRecentOptimizedParameters, fakeParameters, mostRecentMetadata)
    );
  };

  // This is used to change the visible cuboids without changing the editor text.s
  const updateCuboidsSilently = (cuboidText) => {
    const silentAst = new ShapeAssemblyParser().parseShapeAssemblyProgram(cuboidText, prefix);

    // Transpile once to get the subassembly bounds.
    const transpiled = new Transpiler().transpile(silentAst, getTranspilerSettings());
    transpiled.assemblyMap = mapToObject(transpiled.assemblyMap);
    const silentSubassemblyBounds = getSubassemblyBounds(transpiled);

    // Clamp to the subassembly bounds, mark which tokens were faked and transpile again.
    // Use the ast (with the original token indices) because the clamps are used for text highlighting.
    const clamps = getSubassemblyBoundClamps(ast, silentAst, silentSubassemblyBounds);
    setFakeParameters(clamps);
    const finalTranspiled = new Transpiler().transpile(silentAst, getTranspilerSettings());

    if (finalTranspiled && finalTranspiled.text) {
      dispatch(execute(finalTranspiled.text));
    }
  };

  const undoHistory = () => {
    const text = undoStack.current.pop();
    if (!text) {
      return;
    }
    pushAction(text);
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
    pushAction(text);
    undoStack.current.push(lastEditorText.current);
    update(editorStateFromText(text), true);
    setRedoAvailable(redoStack.current.length > 0);
    setUndoAvailable(true);
  };
  const clearHistory = () => {
    setUndoAvailable(false);
    setRedoAvailable(false);
    undoStack.current = [];
    redoStack.current = [];
    actionStack.current = [];
  };
  const resetHistory = () => {
    const text = undoStack.current[0];
    if (!text) {
      return;
    }
    pushAction(text);
    update(editorStateFromText(text), true);
    undoStack.current = [];
    redoStack.current = [];
    setUndoAvailable(false);
    setRedoAvailable(false);
  };

  const username = useSelector((state) => state.editingTaskSlice.username);
  const currentTaskIndex = useSelector((state) => state.editingTaskSlice.currentTaskIndex);
  const saveEditingTask = async () => {
    try {
      const result = await postActionStack(username, currentTaskIndex, actionStack.current);
      if (!result.ok) {
        // eslint-disable-next-line no-alert
        alert('Failed to save this editing task.');
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      // eslint-disable-next-line no-alert
      alert('Failed to save this editing task.');
    }
  };
  const studyCondition = useSelector((state) => state.editingTaskSlice.studyCondition);
  const startEditingTask = (index, studyConditionOverride) => {
    clearHistory();
    setSecondsRemaining(TIME_PER_EDITING_TASK);

    const studyConditionAdjusted = studyConditionOverride ?? studyCondition;
    if (studyConditionAdjusted === undefined) {
      throw new Error('Study condition was undefined.');
    }
    const editingTask = getEditingTask(studyConditionAdjusted, index);

    // Log the initial state.
    pushAction(editingTask.initial);

    update(editorStateFromText(editingTask.initial), true, {
      prefix: editingTask.abstractions,
    });
    dispatch(
      setTargetCode({
        targetCode: editingTask.target,
        abstractions: editingTask.abstractions,
        taskIndex: index,
      })
    );
  };
  const startEditingTaskSeries = (newUsername, newStudyCondition) => {
    dispatch(setUsernameAndStudyCondition({ username: newUsername, studyCondition: newStudyCondition }));
    startEditingTask(0, newStudyCondition);
  };

  const decrementSecondsRemaining = () => {
    const newValue = secondsRemaining - 1;
    if (newValue === 0) {
      setShowingTimeWarning(true);
    }
    setSecondsRemaining(newValue);
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
        resetHistory,

        // These are other editing task helpers.
        startEditingTask,
        startEditingTaskSeries,
        saveEditingTask,
        subassemblyBounds,
        fakeParameters,
        secondsRemaining,
        decrementSecondsRemaining,
        showingTimeWarning,
        setShowingTimeWarning,
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
