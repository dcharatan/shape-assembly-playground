import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

const BaseCuboid = ({ cuboid, color, onPointerOver, onPointerOut, onClick }) => {
  // Create the cuboid geometry.
  const geometry = new THREE.BoxBufferGeometry(...cuboid.dimensions);

  // Apply the cuboid's transformations to the geometry.
  const translate = new THREE.Matrix4();
  translate.makeTranslation(...cuboid.position);
  const rotate = new THREE.Matrix4();
  rotate.lookAt(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(...cuboid.frontNormal),
    new THREE.Vector3(...cuboid.topNormal)
  );
  geometry.applyMatrix4(translate.multiply(rotate));

  return (
    <group>
      <mesh geometry={geometry} onPointerOut={onPointerOut} onPointerOver={onPointerOver} onClick={onClick}>
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[geometry]} />
        <lineBasicMaterial attach="material" color="black" />
      </lineSegments>
    </group>
  );
};

BaseCuboid.propTypes = {
  cuboid: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    dimensions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    frontNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    topNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    globalLineIndex: PropTypes.number.isRequired,
  }).isRequired,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPointerOver: PropTypes.func,
  onPointerOut: PropTypes.func,
  onClick: PropTypes.func,
};

BaseCuboid.defaultProps = {
  color: 'gray',
  onPointerOver: () => {},
  onPointerOut: () => {},
  onClick: () => {},
};

export default BaseCuboid;
