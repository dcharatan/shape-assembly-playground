import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ContentState, EditorState } from 'draft-js';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { useDispatch } from 'react-redux';
import NonSerializableContext from './NonSerializableContext';
import { execute, updateWithTranspilation } from '../executor/executorSlice';
import insertDecorators from '../editor/decorators/insertDecorators';

const INITIAL_TEXT = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

// This holds all state that can't go into Redux because it's not serializable.
const NonSerializableContextManager = ({ children }) => {
  const dispatch = useDispatch();

  // These are the non-serializable pieces of state that can't go into Redux.
  const [ast, setAst] = useState(undefined);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(INITIAL_TEXT))
  );

  // This is used to ensure that transpilation only runs when the text actually changes.
  const lastEditorText = useRef(undefined);
  const update = (newEditorState, forceRefresh) => {
    // Get the new editor text.
    const editorText = newEditorState.getCurrentContent().getPlainText('\n');

    // Attempt transpilation if the text is different.
    let mostRecentAst = ast;
    if (editorText !== lastEditorText.current || forceRefresh) {
      // Parse a new AST.
      mostRecentAst = new ShapeAssemblyParser().parseShapeAssemblyProgram(editorText);
      setAst(mostRecentAst);

      // Transpile the AST.
      const transpiled = new Transpiler().transpile(mostRecentAst);
      dispatch(updateWithTranspilation(transpiled));

      // If transpilation succeeds, call the executor.
      if (transpiled && transpiled.text) {
        dispatch(execute(transpiled.text));
      }
    }
    lastEditorText.current = editorText;

    // console.log('CHANGE EDITOR STATE');
    setEditorState(insertDecorators(newEditorState, mostRecentAst));
  };

  return (
    <NonSerializableContext.Provider
      value={{
        ast,
        setAst,
        editorState,
        setEditorState: (newEditorState) => update(newEditorState, false),
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
