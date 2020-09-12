import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

const Cuboid = ({ cuboid }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const onHover = useCallback((e, value) => {
    e.stopPropagation();
    setHover(value);
  }, [setHover]);

  // Create the cuboid geometry.
  const geometry = new THREE.BoxBufferGeometry(...cuboid.dimensions);

  // Create the outline geometry.
  const outlineGeometry = new THREE.BoxBufferGeometry(...cuboid.dimensions.map((dim) => dim + 0.05));

  // Apply the cuboid's transformations to the geometry.
  const translate = new THREE.Matrix4();
  translate.makeTranslation(...cuboid.position);
  const rotate = new THREE.Matrix4();
  rotate.lookAt(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(...cuboid.frontNormal),
    new THREE.Vector3(...cuboid.topNormal)
  );
  const transformation = translate.multiply(rotate);
  geometry.applyMatrix4(transformation);
  outlineGeometry.applyMatrix4(transformation);

  return (
    <>
      <mesh
        ref={mesh}
        geometry={outlineGeometry}
      >
        <meshBasicMaterial attach="material" color={'black'} depthWrite={false} depthTest={true} />
      </mesh>
      <mesh
        ref={mesh}
        geometry={geometry}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
      >
        <meshStandardMaterial attach="material" color={hovered ? 'orange' : 'gray'} />
      </mesh>

    </>
  );
};

Cuboid.propTypes = {
  cuboid: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    scale: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    frontNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    topNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    globalLineIndex: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cuboid;
