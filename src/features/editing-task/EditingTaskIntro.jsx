import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { setUserName } from './editingTaskSlice';
import NonSerializableContext from '../context/NonSerializableContext';

const EditingTaskIntro = () => {
  const show = useSelector((state) => state.editingTaskSlice.userName) === undefined;
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { startEditingTask } = useContext(NonSerializableContext);
  const onSubmit = () => {
    // Set the username (this makes the modal disappear) and start the editing task.
    dispatch(setUserName(name));
    startEditingTask(0);
  };
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Welcome to the editing task.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        As outlined in the intro video, you will be asked to change program parameters to match a target shape. Please
        enter your name to get started.
        <Form.Control
          className="mt-3"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && name !== '') {
              onSubmit();
            }
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" disabled={name === ''} onClick={onSubmit}>
          Start Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditingTaskIntro;
