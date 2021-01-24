import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import UndoRedo from './UndoRedo';
import CompleteTaskButton from './CompleteTaskButton';
import { toggleWireframe } from './editingTaskSlice';
import { getEditingTasks } from './getEditingTask';
import NonSerializableContext from '../context/NonSerializableContext';
import TimeWarningModal from './TimeWarningModal';

const EditingTaskBar = () => {
  const dispatch = useDispatch();
  const taskIndex = useSelector((state) => state.editingTaskSlice.currentTaskIndex);
  const wireframeEnabled = useSelector((state) => state.editingTaskSlice.wireframeEnabled);
  const text = `${wireframeEnabled ? 'Hide' : 'Show'} Target (Wireframe)`;
  const studyCondition = useSelector((state) => state.editingTaskSlice.studyCondition);
  const editingTasks = studyCondition === undefined ? [] : getEditingTasks(studyCondition);
  const { secondsRemaining, decrementSecondsRemaining } = useContext(NonSerializableContext);

  useEffect(() => {
    const myInterval = setInterval(() => {
      // Check this to make sure a task is running.
      if (editingTasks.length > 0) {
        decrementSecondsRemaining();
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  let message = <span className="text-danger">Please continue to the next task.</span>;
  if (secondsRemaining > 0) {
    message = `Remaining for Task: ${secondsRemaining}s`;
  }

  return (
    <div className="w-100 rounded border mb-2 p-2 d-flex flex-row justify-content-between align-items-center">
      <TimeWarningModal />
      <div className="px-2 text-secondary">
        <div>
          <b>{editingTasks.length > 0 ? `Task ${taskIndex + 1}/${editingTasks.length}` : 'No tasks loaded.'}</b>
        </div>
        <div>
          <small>{message}</small>
        </div>
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
