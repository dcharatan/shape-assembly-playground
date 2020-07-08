import React from 'react';
import Viewer from './Viewer';

const EditorArea = () => (
  <div className="w-100 h-100 d-flex flex-column">
    <h5>3D Viewer</h5>
    <div className="d-flex flex-grow-1 w-100">
      <Viewer />
    </div>
  </div>
);

export default EditorArea;
