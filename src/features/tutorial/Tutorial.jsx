import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Code = ({ children }) => <span style={{ fontFamily: ['Inconsolata', 'monospace'] }}>{children}</span>;

Code.propTypes = {
  children: PropTypes.node,
};

Code.defaultProps = {
  children: null,
};

const Tutorial = () => {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
      <h1 className="mt-2">ShapeAssembly Tutorial</h1>
      <p>
        ShapeAssembly is a domain-specific language for geometry. The syntax is a simplified version of Python. The two
        basic ShapeAssembly commands are:
      </p>
      <ul>
        <li>
          <Code>Cuboid(length, width, height, aligned)</Code>
          <>: Create a cuboid.</>
        </li>
        <li>
          <Code>attach(cuboid1, cuboid2, x1, y1, z1, x2, y2, z2)</Code>
          <span>
            : Attach cuboid1 to cuboid2 by moving cuboid1 such that (x1, y1, z1) in cuboid1's coordinate space is as
            close to (x2, y2, z2) in cuboid2's coordinate space as possible.
          </span>
        </li>
      </ul>
    </Alert>
  );
};

export default Tutorial;
