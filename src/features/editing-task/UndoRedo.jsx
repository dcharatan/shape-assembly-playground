import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import NonSerializableContext from '../context/NonSerializableContext';

const UndoRedo = () => {
  const { undoHistory, redoHistory, undoAvailable, redoAvailable } = useContext(NonSerializableContext);
  return (
    <>
      <Button size="sm" variant="outline-secondary" className="m-1" onClick={undoHistory} disabled={!undoAvailable}>
        <UndoIcon className="mr-1" />
        Undo
      </Button>
      <Button size="sm" variant="outline-secondary" className="m-1" onClick={redoHistory} disabled={!redoAvailable}>
        <RedoIcon className="mr-1" />
        Redo
      </Button>
    </>
  );
};

export default UndoRedo;
