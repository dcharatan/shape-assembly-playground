import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { setCuboidHovered, setCuboidNotHovered } from '../editor/editorSlice';
import calculateHighlight from './calculateHighlight';

const Cuboid = ({ cuboid, dispatch, hoveredTranspiledLines, attachmentMetadata }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setHover(value);
      if (value) {
        dispatch(setCuboidHovered(cuboid.globalLineIndex));
      } else {
        dispatch(setCuboidNotHovered(cuboid.globalLineIndex));
      }
    },
    [setHover, dispatch, cuboid.globalLineIndex]
  );

  const selection = calculateHighlight(cuboid.globalLineIndex, hoveredTranspiledLines, attachmentMetadata);

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

  // Calculate the cuboid's color.
  let color = 'gray';
  if (selection === 'direct' || selection === 'primary' || hovered) {
    color = 0x4285f4;
  } else if (selection === 'secondary') {
    color = 0xf4b400;
  }

  return (
    <>
      <mesh
        ref={mesh}
        geometry={geometry}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
      >
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[geometry]} />
        <lineBasicMaterial attach="material" color="black" />
      </lineSegments>
    </>
  );
};

Cuboid.propTypes = {
  cuboid: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    dimensions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    frontNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    topNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    globalLineIndex: PropTypes.number.isRequired,
  }).isRequired,

  // This is passed in because it's not available with useDispatch/useSelector here.
  // It's probably because of react-three-fiber.
  dispatch: PropTypes.func.isRequired,
  hoveredTranspiledLines: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  attachmentMetadata: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default Cuboid;
