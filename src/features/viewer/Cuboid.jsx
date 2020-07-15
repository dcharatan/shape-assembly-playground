import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Quaternion, Matrix4 } from 'three';

const Cuboid = ({ scale, position, normals }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  // Builds a quaternion from the cuboid's normals.
  const m = new Matrix4();
  m.set(...normals[0], 0, ...normals[1], 0, ...normals[2], 0, 0, 0, 0, 0);
  const quaternion = new Quaternion();
  quaternion.setFromRotationMatrix(m);

  return (
    <mesh
      position={position}
      quaternion={quaternion}
      ref={mesh}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

Cuboid.propTypes = {
  scale: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  normals: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired).isRequired,
};

export default Cuboid;
