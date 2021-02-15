import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ViewerGridHeader from './ViewerGridHeader';
import FixedViewer from '../viewer/FixedViewer';

const ViewerGrid = ({ numRows, numCols, programs, prefix }) => {
  const itemsPerPage = numRows * numCols;
  const [currentPrograms, setCurrentPrograms] = useState(programs.slice(0, itemsPerPage));

  const width = `${100 / numCols}%`;
  const height = `${100 / numRows}%`;

  const viewers = currentPrograms.map((program, index) => {
    const row = Math.floor(index / numCols);
    const col = index % numCols;
    const classNames = [];
    if (row < numRows - 1) {
      classNames.push('border-bottom');
    }
    if (col < numCols - 1) {
      classNames.push('border-right');
    }
    return (
      <div style={{ width, height }} className={classNames.join(' ')}>
        <FixedViewer code={program} prefix={prefix} noBorder />
      </div>
    );
  });

  return (
    <div className="d-flex flex-column h-100">
      <ViewerGridHeader itemsPerPage={itemsPerPage} programs={programs} setPrograms={setCurrentPrograms} />
      <div className="border border-top-0 d-flex flex-grow-1 flex-wrap">{viewers}</div>
    </div>
  );
};

ViewerGrid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
  programs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prefix: PropTypes.string,
};

ViewerGrid.defaultProps = {
  prefix: '',
};

export default ViewerGrid;
