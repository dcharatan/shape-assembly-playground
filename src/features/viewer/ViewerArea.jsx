import React from 'react';
import Viewer from './Viewer';

const ViewerArea = () => (
  <div className="w-100 h-100 d-flex flex-column">
    <div className="d-flex flex-grow-1 w-100">
      <Viewer />
    </div>
  </div>
);

export default ViewerArea;
