import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import { setCuboidsHovered, setCuboidsNotHovered } from '../editor/editorSlice';
import { onCuboidClicked } from '../executor/executorSlice';
import GroupWithMatrix from './GroupWithMatrix';
import { COLOR_DIRECT, COLOR_PRIMARY, COLOR_SECONDARY } from '../../colors';

const HoverableCuboid = ({ cuboid, hoveredTranspiledLines, selectedTranspiledLines, cuboidIndex }) => {
  const dispatch = useDispatch();
  const [hovered, setHover] = useState(false);
  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setHover(value);

      // If the cuboid is a clone (i.e. a parent line index exists), it's highlighted as a secondary cuboid.
      // Otherwise, it's highlighted as a primary cuboid.
      const selection = {
        [cuboid.lineIndex]: 'primary',
      };
      if (cuboid.parentLineIndex) {
        selection[cuboid.parentLineIndex] = 'secondary';
      }

      if (value) {
        dispatch(setCuboidsHovered(selection));
      } else {
        dispatch(setCuboidsNotHovered(selection));
      }
    },
    [setHover, dispatch, cuboid.lineIndex, cuboid.parentLineIndex]
  );
  const modifiedCuboidIndex = useSelector((state) => state.executorSlice.modifiedCuboidIndex);
  const editingCuboidMatrix = useSelector((state) => state.executorSlice.modifiedCuboidMatrix);
  const optimizingThisCuboid = cuboidIndex === modifiedCuboidIndex;

  // Calculate the cuboid's color.
  // Hover selection causes "selection" (locked) selection to be ignored.
  const selection =
    hoveredTranspiledLines[cuboid.lineIndex] ||
    (Object.entries(hoveredTranspiledLines).length === 0 && selectedTranspiledLines[cuboid.lineIndex]);
  let color = 'gray';
  if (optimizingThisCuboid) {
    color = 0xb603fc;
  } else if (hovered) {
    if (cuboid.source === 'CUBOID') {
      color = COLOR_PRIMARY;
    } else {
      color = COLOR_SECONDARY;
    }
  } else if (selection === 'direct') {
    color = COLOR_DIRECT;
  } else if (selection === 'primary') {
    color = COLOR_PRIMARY;
  } else if (selection === 'secondary') {
    color = COLOR_SECONDARY;
  }

  // Use the saved matrix during optimization.
  let matrix;
  if (optimizingThisCuboid) {
    matrix = new THREE.Matrix4();
    matrix.elements = editingCuboidMatrix;
  } else {
    matrix = makeCuboidMatrix(cuboid);
  }
  return (
    <GroupWithMatrix matrix={matrix}>
      <BaseCuboid
        color={color}
        wireframe={cuboid.isBbox}
        wireframeColor={cuboid.isBbox ? color : 'black'}
        invisible={cuboid.isBbox && !selection}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
        onClick={() => dispatch(onCuboidClicked(cuboidIndex))}
      />
    </GroupWithMatrix>
  );
};

HoverableCuboid.propTypes = {
  cuboid: PropTypes.shape({
    isBbox: PropTypes.bool.isRequired,
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    dimensions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    frontNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    topNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    lineIndex: PropTypes.number.isRequired,
    parentLineIndex: PropTypes.number,
    source: PropTypes.string.isRequired,
  }).isRequired,
  hoveredTranspiledLines: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  selectedTranspiledLines: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  cuboidIndex: PropTypes.number.isRequired,
};

export default HoverableCuboid;
