import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setTranspiledLineHovered, setTranspiledLineNotHovered } from '../editorSlice';

const LineHighlightDecorator = ({ children, index, selected }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const attachmentMetadata = useSelector((state) => state.executorSlice.attachmentMetadata);

  // Check if the line is an attachment line.
  const classes = ['cursor-pointer'];

  if (selected || hovered) {
    if (attachmentMetadata[index.toString()] !== undefined) {
      classes.push('bg-success');
    } else {
      classes.push('bg-primary');
    }
    classes.push('text-white');
  }

  const onHover = (newHoveredValue) => {
    setHovered(newHoveredValue);
    if (newHoveredValue) {
      dispatch(setTranspiledLineHovered(index));
    } else {
      dispatch(setTranspiledLineNotHovered(index));
    }
  };

  return (
    <span className={classes.join(' ')} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      {children}
    </span>
  );
};

LineHighlightDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default LineHighlightDecorator;

export const makeLineHighlightDecoratorStrategy = (hoveredCuboids, lineToIndex) => (contentBlock, callback) => {
  const text = contentBlock.getText();
  const selectedLineIndices = new Set(hoveredCuboids);

  // Create a decorator for each line.
  let startIndex = 0;
  text.split('\n').forEach((line) => {
    const index = lineToIndex.get(line);
    if (!index) {
      return;
    }
    callback(startIndex, startIndex + line.length, {
      index,
      selected: selectedLineIndices.has(index.toString()),
    });
    startIndex += line.length + 1;
  });
};
