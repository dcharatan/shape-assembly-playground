import React, { useContext } from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NonSerializableContext from '../context/NonSerializableContext';
import { setLiveUpdatesEnabled } from '../editor/editorSlice';

const SapNavbar = () => {
  const { editorState, forceRefresh } = useContext(NonSerializableContext);
  const liveUpdatesEnabled = useSelector((state) => state.editorSlice.liveUpdatesEnabled);
  const dispatch = useDispatch();
  const text = liveUpdatesEnabled ? 'Enable Manual Mode' : 'Disable Manual Mode';

  const triggerExecuteButton = (
    <Button variant="outline-secondary" className="mr-2" size="sm" onClick={() => forceRefresh(editorState, true)}>
      Trigger Execution
    </Button>
  );

  const toggleLiveUpdates = () => {
    // Trigger an update when switching to live updates.
    if (!liveUpdatesEnabled) {
      forceRefresh(editorState, true);
    }

    // Actually toggle the updates.
    dispatch(setLiveUpdatesEnabled(!liveUpdatesEnabled));
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>ShapeAssembly Playground</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Playground
          </Nav.Link>
          <Nav.Link as={Link} to="/result-viewer">
            Result Viewer
          </Nav.Link>
        </Nav>
        <div>
          {liveUpdatesEnabled ? null : triggerExecuteButton}
          <Button variant="outline-secondary" size="sm" onClick={toggleLiveUpdates}>
            {text}
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SapNavbar;
