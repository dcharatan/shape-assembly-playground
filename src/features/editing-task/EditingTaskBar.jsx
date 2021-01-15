import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import UndoRedo from './UndoRedo';
import CompleteTaskButton from './CompleteTaskButton';
import editingTasks from './editingTasks';
import { toggleWireframe } from './editingTaskSlice';

const EditingTaskBar = () => {
  const dispatch = useDispatch();
  const taskIndex = useSelector((state) => state.editingTaskSlice.currentTaskIndex);
  const wireframeEnabled = useSelector((state) => state.editingTaskSlice.wireframeEnabled);
  const text = `${wireframeEnabled ? 'Hide' : 'Show'} Target (Wireframe)`;
  return (
    <div className="w-100 rounded border mb-2 p-2 d-flex flex-row justify-content-between align-items-center">
      <div className="p-2 text-secondary">
        <b>{`Task ${taskIndex + 1}/${editingTasks.length}`}</b>
      </div>
      <div className="d-flex flex-row m-1">
        <Button size="sm" variant="outline-secondary" className="m-1" onClick={() => dispatch(toggleWireframe())}>
          {text}
        </Button>
        <UndoRedo />
        <CompleteTaskButton />
      </div>
    </div>
  );
};

export default EditingTaskBar;
