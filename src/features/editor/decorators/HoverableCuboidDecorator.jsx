import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setTranspiledLinesHovered, setTranspiledLinesNotHovered } from '../editorSlice';
import { COLOR_SECONDARY, getColor } from '../../../colors';
import HighlightDecorator from './HighlightDecorator';
import NonSerializableContext from '../../context/NonSerializableContext';
import { tokenPropType, tokenToKey } from '../tokenUtilities';

const HoverableCuboidDecorator = ({ children, token }) => {
  const dispatch = useDispatch();
  const { metadata } = useContext(NonSerializableContext);
  const highlights = metadata.get(tokenToKey(token));
  const hoveredTranspiledLines = useSelector((state) => state.editorSlice.hoveredTranspiledLines);
  const hoveredCuboids = useSelector((state) => state.editorSlice.hoveredCuboids);
  const [hovered, setHovered] = useState(false);

  const color = COLOR_SECONDARY;
  if (!highlights) {
    // This happens if a cuboid is in a function that hasn't been called.
    return <span style={{ color }}>{children}</span>;
  }
  const transpiledLineIndices = highlights.map((h) => h.line);
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
    <HighlightDecorator highlightColor={highlightColor} highlighted={!!highlighted} color={color} onHover={onHover}>
      {children}
    </HighlightDecorator>
  );
};

HoverableCuboidDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  token: tokenPropType.isRequired,
};

export default HoverableCuboidDecorator;
