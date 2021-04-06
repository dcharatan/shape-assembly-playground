import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

export const makeCuboidMatrix = (cuboid) => {
  const translate = new THREE.Matrix4();
  translate.makeTranslation(...cuboid.position);
  const rotate = new THREE.Matrix4();

  const frontNormal = new THREE.Vector3(...cuboid.frontNormal);
  const topNormal = new THREE.Vector3(...cuboid.topNormal);
  const rightNormal = new THREE.Vector3();
  rightNormal.crossVectors(topNormal, frontNormal);

  rotate.makeBasis(rightNormal, topNormal, frontNormal);
  const scale = new THREE.Matrix4();
  scale.makeScale(...cuboid.dimensions);
  return translate.multiply(rotate.multiply(scale));
};

const BaseCuboid = ({ color, wireframeColor, onPointerOver, onPointerOut, onClick, wireframe, invisible }) => {
  const geometry = useRef(new THREE.BoxBufferGeometry());
  const mesh = (
    <mesh
      geometry={geometry.current}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerOver}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
  const lines = (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[geometry.current]} />
      <lineBasicMaterial attach="material" color={wireframeColor} />
    </lineSegments>
  );
  return (
    <group>
      {wireframe || invisible ? null : mesh}
      {invisible ? null : lines}
    </group>
  );
};

BaseCuboid.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wireframeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPointerOver: PropTypes.func,
  onPointerOut: PropTypes.func,
  onClick: PropTypes.func,
  wireframe: PropTypes.bool,
  invisible: PropTypes.bool,
};

BaseCuboid.defaultProps = {
  color: 'gray',
  wireframeColor: 'black',
  onPointerOver: () => {},
  onPointerOut: () => {},
  onClick: () => {},
  wireframe: false,
  invisible: false,
};

export default BaseCuboid;
