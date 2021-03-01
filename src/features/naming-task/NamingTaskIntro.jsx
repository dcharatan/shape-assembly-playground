import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { startFirstTask } from './namingTaskSlice';

const NamingTaskIntro = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.namingTaskSlice.username);
  const [name, setName] = useState('');
  const onSubmit = () => {
    dispatch(startFirstTask(name));
  };
  const message =
    'In this task, you will be asked to assign names to functions and parameters used in shape-generating programs. Please enter your full name to get started.';
  return (
    <Modal show={!username}>
      <Modal.Header>
        <Modal.Title>Welcome to the naming task.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
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

export default NamingTaskIntro;
