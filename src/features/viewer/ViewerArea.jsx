import React from 'react';
import PropTypes from 'prop-types';
import Viewer from './Viewer';
import ViewerToolbar from './ViewerToolbar';
import FixedViewer from './FixedViewer';

const ViewerArea = ({ code }) => (
  <div className="w-100 h-100 d-flex flex-column">
    <ViewerToolbar fixed={code !== undefined} />
    <div className="d-flex flex-grow-1 w-100">{code === undefined ? <Viewer /> : <FixedViewer code={code} />}</div>
  </div>
);

ViewerArea.propTypes = {
  code: PropTypes.string,
};

ViewerArea.defaultProps = {
  code: undefined,
};

export default ViewerArea;
