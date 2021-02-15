import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ViewerGridHeader from './ViewerGridHeader';
import FixedViewer from '../viewer/FixedViewer';
import { substituteAbstractionValues } from '../executor/executorSlice';

const ViewerGrid = ({ numRows, numCols }) => {
  const prefix = useSelector((state) => state.namingTaskSlice.prefix);
  const programs = useSelector((state) => state.namingTaskSlice.programs);
  const abstraction = useSelector((state) => state.namingTaskSlice.abstraction);
  const parameterValues = useSelector((state) => state.namingTaskSlice.parameterValues);

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
    const modifiedProgram = substituteAbstractionValues(program, abstraction, parameterValues);
    return (
      <div style={{ width, height }} className={classNames.join(' ')} key={`${row}/${col}`}>
        <FixedViewer
          code={modifiedProgram}
          prefix={prefix}
          highlightAbstraction={abstraction}
          noBorder
          cuboidColor="gray"
        />
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
};

export default ViewerGrid;
