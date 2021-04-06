import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NamingInterface from './NamingInterface';
import NamingTaskIntro from './NamingTaskIntro';
import { loadRanges } from './namingTaskSlice';
import ViewerGrid from './ViewerGrid';

const NamingTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRanges());
  }, [dispatch]);
  return (
    <>
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
      <NamingTaskIntro />
    </>
  );
};

export default NamingTask;
