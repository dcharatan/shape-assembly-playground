import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ContentState, EditorState } from 'draft-js';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { useDispatch, useSelector } from 'react-redux';
import NonSerializableContext from './NonSerializableContext';
import { endCuboidEditing, execute, updateWithTranspilation } from '../executor/executorSlice';
import insertDecorators from '../editor/decorators/insertDecorators';
import { resetOptimizedParameters } from '../editor/editorSlice';

const INITIAL_TEXT = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

// This holds all state that can't go into Redux because it's not serializable.
const NonSerializableContextManager = ({ children }) => {
  const dispatch = useDispatch();
  const optimizedParameters = useSelector((state) => state.editorSlice.optimizedParameters);
  const cuboidMetadata = useSelector((state) => state.executorSlice.cuboidMetadata);
  const liveUpdatesEnabled = useSelector((state) => state.editorSlice.liveUpdatesEnabled);

  // These are the non-serializable pieces of state that can't go into Redux.
  const [ast, setAst] = useState(undefined);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(INITIAL_TEXT))
  );

  // This is used to ensure that transpilation only runs when the text actually changes.
  const lastEditorText = useRef(undefined);
  const update = (newEditorState, forceRefresh, additionalInformation) => {
    // Get the new editor text.
    const editorText = newEditorState.getCurrentContent().getPlainText('\n');
    dispatch(endCuboidEditing());

    // Attempt transpilation if the text is different.
    let mostRecentCuboidMetadata = cuboidMetadata;
    let mostRecentAst = ast;
    let mostRecentOptimizedParameters = additionalInformation?.optimizedParameters ?? optimizedParameters;
    if (editorText !== lastEditorText.current || forceRefresh) {
      if (!additionalInformation?.optimizedParameters) {
        dispatch(resetOptimizedParameters());
        mostRecentOptimizedParameters = undefined;
      }

      // Parse a new AST.
      mostRecentAst = new ShapeAssemblyParser().parseShapeAssemblyProgram(editorText);
      setAst(mostRecentAst);

      // Transpile the AST.
      const transpiled = new Transpiler().transpile(mostRecentAst);
      mostRecentCuboidMetadata = transpiled?.cuboidMetadata ?? cuboidMetadata;
      dispatch(updateWithTranspilation(transpiled));

      // If transpilation succeeds, call the executor.
      if (transpiled && transpiled.text && (liveUpdatesEnabled || forceRefresh)) {
        dispatch(execute(transpiled.text));
      }
    }
    lastEditorText.current = editorText;

    setEditorState(
      insertDecorators(newEditorState, mostRecentAst, mostRecentOptimizedParameters, mostRecentCuboidMetadata)
    );
  };

  return (
    <NonSerializableContext.Provider
      value={{
        ast,
        setAst,
        editorState,
        setEditorState: (newEditorState, additionalInformation) => update(newEditorState, false, additionalInformation),
        forceRefresh: () => update(editorState, true),
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
