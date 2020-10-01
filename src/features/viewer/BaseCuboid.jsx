import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

export const makeCuboidMatrix = (cuboid) => {
  const translate = new THREE.Matrix4();
  translate.makeTranslation(...cuboid.position);
  const rotate = new THREE.Matrix4();
  rotate.lookAt(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(...cuboid.frontNormal),
    new THREE.Vector3(...cuboid.topNormal)
  );
  const scale = new THREE.Matrix4();
  scale.makeScale(...cuboid.dimensions);
  return translate.multiply(rotate.multiply(scale));
};

const BaseCuboid = ({ color, onPointerOver, onPointerOut, onClick }) => {
  const geometry = new THREE.BoxBufferGeometry();
  return (
    <group>
      <mesh
        geometry={geometry}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerOver}
        onClick={(e) => {
          e.stopPropagation();
          onClick(e);
        }}
      >
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
