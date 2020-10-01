import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

const GroupWithMatrix = ({ matrix, children }) => {
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  matrix.decompose(position, quaternion, scale);

  return (
    <group position={position} quaternion={quaternion} scale={scale}>
      {children}
    </group>
  );
};

GroupWithMatrix.propTypes = {
  matrix: PropTypes.instanceOf(THREE.Matrix4).isRequired,
  children: PropTypes.element.isRequired,
};

export default GroupWithMatrix;
