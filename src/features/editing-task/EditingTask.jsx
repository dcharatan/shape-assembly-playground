import React from 'react';
import { useSelector } from 'react-redux';
import EditorArea from '../editor/EditorArea';
import ViewerArea from '../viewer/ViewerArea';
import EditingTaskBar from './EditingTaskBar';
import EditingTaskIntro from './EditingTaskIntro';
import EditingTaskTutorial from './tutorial/EditingTaskTutorial';

const EditingTask = () => {
  const targetCode = useSelector((state) => state.editingTaskSlice.targetCode);
  const abstractions = useSelector((state) => state.editingTaskSlice.abstractions);
  return (
    <div className="d-flex flex-grow-1 overflow-y-hidden">
      <div className="d-flex flex-row w-100 h-100 p-2 overflow-y-hidden">
        <div className="w-50 h-100 p-2 overflow-y-hidden d-flex flex-column">
          <EditingTaskBar />
          <EditingTaskTutorial />
          <EditingTaskIntro />
          <div className="w-100 d-flex flex-grow-1 overflow-y-hidden">
            <EditorArea hideTabs hideTutorial disableTextEditing />
          </div>
        </div>
        <div className="w-50 h-100">
          <div className="w-100 h-50 p-2">
            <ViewerArea inEditingTask />
          </div>
          <div className="w-100 h-50 p-2">
            <ViewerArea code={targetCode} prefix={abstractions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditingTask;
