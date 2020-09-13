import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SapNavbar = () => (
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
    </Navbar.Collapse>
  </Navbar>
);

export default SapNavbar;
