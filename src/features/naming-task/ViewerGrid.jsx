import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ViewerGridHeader from './ViewerGridHeader';
import FixedViewer from '../viewer/FixedViewer';
import { substituteAbstractionValues } from '../executor/executorSlice';
import { fetchCachedPrecomputations } from './precomputation';
import CachedRateLimiter from '../executor/CachedRateLimiter';
import { markCachedValuesFetched } from './namingTaskSlice';
import CenterSelector from './CenterSelector';

const ViewerGrid = ({ numRows, numCols }) => {
  const dispatch = useDispatch();
  const prefix = useSelector((state) => state.namingTaskSlice.prefix);
  const programs = useSelector((state) => state.namingTaskSlice.programs);
  const abstraction = useSelector((state) => state.namingTaskSlice.abstraction);
  const parameterValues = useSelector((state) => state.namingTaskSlice.parameterValues);
  const cachedValuesFetched = useSelector((state) => state.namingTaskSlice.cachedValuesFetched);
  const activeItem = useSelector((state) => state.namingTaskSlice.activeItem);
  const parameterBounds = useSelector((state) => state.namingTaskSlice.parameterBounds);
  const taskIndex = useSelector((state) => state.namingTaskSlice.taskIndex);
  useEffect(() => {
    const fetchCache = async () => {
      if (!cachedValuesFetched) {
        const result = await fetchCachedPrecomputations(prefix, programs, abstraction);
        if (result.ok) {
          const json = await result.json();
          Object.entries(json).forEach(([key, value]) => {
            CachedRateLimiter.cache.set(key, value);
          });
        }
        dispatch(markCachedValuesFetched());
      }
    };
    fetchCache();
  }, [abstraction, cachedValuesFetched, dispatch, prefix, programs]);

  const itemsPerPage = numRows * numCols;
  const currentPrograms = programs.slice(0, itemsPerPage);

  const width = `${100 / numCols}%`;
  const height = `${100 / numRows}%`;

  const viewers = currentPrograms.map((program, index) => {
    const row = Math.floor(index / numCols);
    const col = index % numCols;
    const classNames = ['d-flex flex-column'];
    if (row < numRows - 1) {
      classNames.push('border-bottom');
    }
    if (col < numCols - 1) {
      classNames.push('border-right');
    }

    // Add the offset from center.
    // This is super hacky. Warning: VERY bad code :)
    let center;
    let range;
    try {
      const parameterIndex = parseInt(Object.keys(parameterValues)[0].split('_')[2], 10);
      const centerValue = parameterBounds[taskIndex][parameterIndex].centers[index];
      center = centerValue ? parseFloat(centerValue) : 0.5;
    } catch {
      center = 0.5;
    }
    try {
      const parameterIndex = parseInt(Object.keys(parameterValues)[0].split('_')[2], 10);
      const rangeValue = parameterBounds[taskIndex][parameterIndex].range;
      range = rangeValue ? parseFloat(rangeValue) : 1;
    } catch {
      range = 1;
    }
    center = Math.min(1, Math.max(center, 0));
    const adjustedParameterValues = {};
    Object.entries(parameterValues).forEach(([key, value]) => {
      adjustedParameterValues[key] = Math.min(1, Math.max(0, value + center - range * 0.5));
    });

    const modifiedProgram = substituteAbstractionValues(program, prefix, abstraction, adjustedParameterValues);
    return (
      <div style={{ width, height }} className={classNames.join(' ')} key={`${row}/${col}`}>
        <div className="d-flex flex-grow-1 border-bottom">
          <FixedViewer
            code={modifiedProgram}
            prefix={prefix}
            highlightAbstraction={abstraction}
            noBorder
            cuboidColor="gray"
          />
        </div>
        <CenterSelector className="m-2" shapeIndex={index} parameterIndex={activeItem} />
      </div>
    );
  });

  return (
    <div className="d-flex flex-column h-100">
      <ViewerGridHeader />
      <div className="border border-top-0 d-flex flex-grow-1 flex-wrap">{viewers}</div>
    </div>
  );
};

ViewerGrid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
};

export default ViewerGrid;
