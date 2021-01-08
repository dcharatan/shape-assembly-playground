/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { OrbitControls } from 'drei';

const ViewerCore = ({ orbitRef, children }) => (
  <>
    <ambientLight intensity={0.65} />
    <pointLight position={[10, 20, 40]} intensity={0.85} />
    <pointLight position={[-10, -20, -40]} intensity={0.65} />
    <OrbitControls ref={orbitRef} />
    {children}
  </>
);

ViewerCore.propTypes = {
  orbitRef: PropTypes.any, // it's a ref
  children: PropTypes.node,
};

ViewerCore.defaultProps = {
  orbitRef: undefined,
  children: undefined,
};

export default ViewerCore;
