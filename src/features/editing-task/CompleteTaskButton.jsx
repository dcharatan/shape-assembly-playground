import React, { useState, useContext } from 'react';

import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NonSerializableContext from '../context/NonSerializableContext';
import editingTasks from './editingTasks';

const CompleteTaskButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const history = useHistory();
  const taskIndex = useSelector((state) => state.editingTaskSlice.currentTaskIndex);
  const { startEditingTask } = useContext(NonSerializableContext);
  return (
    <>
      <Button variant="outline-success" className="m-1" size="sm" onClick={() => setShow(true)}>
        Complete Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Completion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to mark this editing task as completed?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleClose();
              if (taskIndex + 1 < editingTasks.length) {
                startEditingTask(taskIndex + 1);
              } else {
                history.push('/editing-task-thank-you');
              }
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompleteTaskButton;
