import React, { useContext } from 'react';
import { Button, SplitButton, Dropdown } from 'react-bootstrap';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import NonSerializableContext from '../context/NonSerializableContext';

const UndoRedo = () => {
  const { undoHistory, redoHistory, resetHistory, undoAvailable, redoAvailable } = useContext(NonSerializableContext);
  const undo = (
    <>
      <UndoIcon className="mr-1" />
      Undo
    </>
  );
  return (
    <>
      <SplitButton
        title={undo}
        size="sm"
        variant="outline-secondary"
        className="m-1"
        onClick={undoHistory}
        disabled={!undoAvailable}
      >
        <Dropdown.Item onClick={() => resetHistory()}>Reset All Edits</Dropdown.Item>
      </SplitButton>
      <Button size="sm" variant="outline-secondary" className="m-1" onClick={redoHistory} disabled={!redoAvailable}>
        <RedoIcon className="mr-1" />
        Redo
      </Button>
    </>
  );
};

export default UndoRedo;
