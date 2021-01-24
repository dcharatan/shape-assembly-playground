import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import NonSerializableContext from '../context/NonSerializableContext';

const TimeWarningModal = () => {
  const { showingTimeWarning, setShowingTimeWarning } = useContext(NonSerializableContext);
  const handleClose = () => setShowingTimeWarning(false);

  return (
    <Modal show={showingTimeWarning} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Time Warning</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The recommended amount of time for this task has passed. Please make your last edits and continue to the next
        task soon.
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimeWarningModal;
