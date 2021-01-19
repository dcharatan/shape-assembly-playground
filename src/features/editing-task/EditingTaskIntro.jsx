import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import NonSerializableContext from '../context/NonSerializableContext';

const EditingTaskIntro = () => {
  const username = useSelector((state) => state.editingTaskSlice.username);
  const show = username === undefined;
  const [name, setName] = useState('');
  const [studyCondition, setStudyCondition] = useState(1);
  const { startEditingTaskSeries } = useContext(NonSerializableContext);
  const onSubmit = () => {
    startEditingTaskSeries(name, studyCondition);
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
        <div className="w-100 d-flex flex-row justify-content-between">
          <ToggleButtonGroup
            type="radio"
            name="studyCondition"
            value={studyCondition}
            onChange={(x) => setStudyCondition(x)}
          >
            <ToggleButton variant="secondary" value={1}>
              Condition A
            </ToggleButton>
            <ToggleButton variant="secondary" value={2}>
              Condition B
            </ToggleButton>
          </ToggleButtonGroup>
          <Button variant="primary" disabled={name === ''} onClick={onSubmit}>
            Start Task
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditingTaskIntro;
