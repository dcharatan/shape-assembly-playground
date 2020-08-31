import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Cuboid = ({ scale, position }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'orange' : 'gray'} />
    </mesh>
  );
};

Cuboid.propTypes = {
  scale: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Cuboid;
