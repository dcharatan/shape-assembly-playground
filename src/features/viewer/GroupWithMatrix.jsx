import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';

const GroupWithMatrix = ({ matrix, children }) => {
  const group = useRef();

  useFrame(() => {
    // Call the ref to get the matrix.
    if (!(matrix instanceof THREE.Matrix4)) {
      const position = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      const scale = new THREE.Vector3();
      matrix().decompose(position, quaternion, scale);
      group.current.position.set(position.x, position.y, position.z);
      group.current.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
      group.current.scale.set(scale.x, scale.y, scale.z);
    }
  });

  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  if (matrix instanceof THREE.Matrix4) {
    // Use the matrix (a Matrix4) directly.
    matrix.decompose(position, quaternion, scale);
  } else {
    // Call the ref to get the matrix.
    matrix().decompose(position, quaternion, scale);
  }

  return (
    <group ref={group} position={position} quaternion={quaternion} scale={scale}>
      {children}
    </group>
  );
};

GroupWithMatrix.propTypes = {
  matrix: PropTypes.oneOfType([PropTypes.instanceOf(THREE.Matrix4).isRequired, PropTypes.func.isRequired]).isRequired,
  children: PropTypes.element.isRequired,
};

export default GroupWithMatrix;
