import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import { setCuboidHovered, setCuboidNotHovered } from '../editor/editorSlice';
import calculateHighlight from './calculateHighlight';
import { onCuboidClicked } from '../executor/executorSlice';
import GroupWithMatrix from './GroupWithMatrix';

const HoverableCuboid = ({ cuboid, hoveredTranspiledLines, attachmentMetadata, cuboidIndex }) => {
  const dispatch = useDispatch();
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
  const modifiedCuboidIndex = useSelector((state) => state.executorSlice.modifiedCuboidIndex);
  const editingCuboidMatrix = useSelector((state) => state.executorSlice.modifiedCuboidMatrix);
  const optimizingThisCuboid = cuboidIndex === modifiedCuboidIndex;

  // Calculate the cuboid's color.
  const selection = calculateHighlight(cuboid.globalLineIndex, hoveredTranspiledLines, attachmentMetadata);
  let color = 'gray';
  if (optimizingThisCuboid) {
    color = 0xb603fc;
  } else if (selection === 'direct' || selection === 'primary' || hovered) {
    color = 0x4285f4;
  } else if (selection === 'secondary') {
    color = 0xf4b400;
  }

  // Use the saved matrix during optimization.
  let matrix;
  if (optimizingThisCuboid) {
    matrix = new THREE.Matrix4();
    matrix.set(...editingCuboidMatrix);
  } else {
    matrix = makeCuboidMatrix(cuboid);
  }

  return (
    <GroupWithMatrix matrix={matrix}>
      <BaseCuboid
        cuboid={cuboid}
        color={color}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
        onClick={() => dispatch(onCuboidClicked(cuboidIndex))}
      />
    </GroupWithMatrix>
  );
};

HoverableCuboid.propTypes = {
  cuboid: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    dimensions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    frontNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    topNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    globalLineIndex: PropTypes.number.isRequired,
  }).isRequired,
  hoveredTranspiledLines: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  attachmentMetadata: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
  cuboidIndex: PropTypes.number.isRequired,
};

export default HoverableCuboid;
