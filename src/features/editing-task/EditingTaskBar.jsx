import React from 'react';
import { useSelector } from 'react-redux';
import UndoRedo from './UndoRedo';
import CompleteTaskButton from './CompleteTaskButton';
import editingTasks from './editingTasks';

const EditingTaskBar = () => {
  const taskIndex = useSelector((state) => state.editingTaskSlice.currentTaskIndex);
  return (
    <div className="w-100 rounded border mb-2 p-2 d-flex flex-row justify-content-between align-items-center">
      <div className="p-2 text-secondary">
        <b>{`Task ${taskIndex + 1}/${editingTasks.length}`}</b>
      </div>
      <div className="d-flex flex-row m-1">
        <UndoRedo />
        <CompleteTaskButton />
      </div>
    </div>
  );
};

export default EditingTaskBar;
