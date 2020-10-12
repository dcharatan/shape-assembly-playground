import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContentState, EditorState } from 'draft-js';
import NonSerializableContext from './NonSerializableContext';

const INITIAL_TEXT = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

const NonSerializableContextManager = ({ children }) => {
  const [ast, setAst] = useState(undefined);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(INITIAL_TEXT))
  );

  return (
    <NonSerializableContext.Provider value={{ ast, setAst, editorState, setEditorState }}>
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
