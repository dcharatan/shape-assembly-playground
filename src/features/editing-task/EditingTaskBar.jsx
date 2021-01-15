import React from 'react';
import UndoRedo from './UndoRedo';

const EditingTaskBar = () => {
  const lol = 5;
  return (
    <div className="w-100 rounded border mb-2 p-2 d-flex flex-row justify-content-between align-items-center">
      <div className="p-2">Editing Task (1/15)</div>
      <UndoRedo />
    </div>
  );
};

export default EditingTaskBar;
