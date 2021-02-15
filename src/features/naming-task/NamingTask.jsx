import React from 'react';
import NamingInterface from './NamingInterface';
import ViewerGrid from './ViewerGrid';

const NamingTask = () => (
  <div className="d-flex flex-grow-1 overflow-y-hidden">
    <div className="d-flex flex-row w-100 h-100 p-2 overflow-y-hidden">
      <div className="w-25 h-100 p-2 overflow-y-hidden d-flex flex-column">
        <NamingInterface />
      </div>
      <div className="w-75 h-100 p-2">
        <ViewerGrid numRows={2} numCols={3} />
      </div>
    </div>
  </div>
);

export default NamingTask;
