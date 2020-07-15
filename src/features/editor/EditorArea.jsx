import React from 'react';
import SapEditor from './SapEditor';

const EditorArea = (props) => (
  <div className="w-100 h-100 d-flex flex-column">
    <h5>ShapeAssembly Editor</h5>
    <div className="d-flex flex-grow-1 w-100">
      <SapEditor {...props} />
    </div>
  </div>
);

export default EditorArea;
