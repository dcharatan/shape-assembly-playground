import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setTranspiledLinesHovered, setTranspiledLinesNotHovered } from '../editorSlice';
import { getColor } from '../../../colors';
import HighlightDecorator from './HighlightDecorator';

const HoverableCuboidDecorator = ({ children, transpiledLineIndices, color }) => {
  const dispatch = useDispatch();
  const hoveredTranspiledLines = useSelector((state) => state.editorSlice.hoveredTranspiledLines);
  const hoveredCuboids = useSelector((state) => state.editorSlice.hoveredCuboids);

  const [hovered, setHovered] = useState(false);
  const onHover = (newHoveredValue) => {
    if (transpiledLineIndices !== undefined) {
      const selection = {};
      transpiledLineIndices.forEach((index) => {
        selection[index] = 'direct';
      });
      setHovered(newHoveredValue);
      if (newHoveredValue) {
        dispatch(setTranspiledLinesHovered(selection));
      } else {
        dispatch(setTranspiledLinesNotHovered(transpiledLineIndices));
      }
    }
  };

  // Highlight if at least one of the line indices is selected.
  let selection;
  transpiledLineIndices.forEach((lineIndex) => {
    selection = selection || hoveredTranspiledLines[lineIndex] || hoveredCuboids[lineIndex];
  });

  // Figure out the selection color.
  const highlightColor = getColor(selection) ?? 'black';
  const highlighted = hovered || selection;
  return (
    <HighlightDecorator highlightColor={highlightColor} highlighted={highlighted} color={color} onHover={onHover}>
      {children}
    </HighlightDecorator>
  );
};

HoverableCuboidDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  transpiledLineIndices: PropTypes.arrayOf(PropTypes.number.isRequired),
  color: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
};

HoverableCuboidDecorator.defaultProps = {
  transpiledLineIndices: [],
  color: 'black',
};

export default HoverableCuboidDecorator;
