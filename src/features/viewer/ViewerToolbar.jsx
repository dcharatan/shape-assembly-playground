import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ViewerToolbar = ({ fixed }) => {
  const optimizationInProgress = useSelector((state) => state.executorSlice.optimizationInProgress);

  // Figure out the toolbar's message.
  let content = '3D Viewer';
  if (fixed) {
    content = 'Editing Goal';
  } else if (optimizationInProgress) {
    content = 'Optimization in progress...';
  }

  return (
    <div
      className={`${optimizationInProgress || fixed ? 'bg-secondary' : 'bg-primary'} text-white py-1 px-2 rounded-top`}
    >
      {content}
    </div>
  );
};

ViewerToolbar.propTypes = {
  fixed: PropTypes.bool,
};

ViewerToolbar.defaultProps = {
  fixed: false,
};

export default ViewerToolbar;
