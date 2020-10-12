import React from 'react';
import Viewer from './Viewer';
import ViewerToolbar from './ViewerToolbar';

const ViewerArea = () => (
  <div className="w-100 h-100 d-flex flex-column">
    <ViewerToolbar />
    <div className="d-flex flex-grow-1 w-100">
      <Viewer />
    </div>
  </div>
);

export default ViewerArea;
