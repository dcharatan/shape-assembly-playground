import React from 'react';
import { useSelector } from 'react-redux';

const ViewerToolbar = () => {
  const optimizationInProgress = useSelector((state) => state.executorSlice.optimizationInProgress);

  // Figure out the toolbar's message.
  const content = optimizationInProgress ? 'Optimization in progress...' : '3D Viewer';

  return (
    <div className={`${optimizationInProgress ? 'bg-secondary' : 'bg-primary'} text-white py-1 px-2 rounded-top`}>
      {content}
    </div>
  );
};

export default ViewerToolbar;
