import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setTranspiledLineHovered, setTranspiledLineNotHovered } from '../editorSlice';

const VariableNameDecorator = ({ children, transpiledLineIndex }) => {
  const [hovered, setHovered] = useState(false);
  const hoveredCuboids = useSelector((state) => state.editorSlice.hoveredCuboids);
  const dispatch = useDispatch();
  const onHover = (newHoveredValue) => {
    if (transpiledLineIndex !== undefined) {
      setHovered(newHoveredValue);
      if (newHoveredValue) {
        dispatch(setTranspiledLineHovered(transpiledLineIndex));
      } else {
        dispatch(setTranspiledLineNotHovered(transpiledLineIndex));
      }
    }
  };

  return (
    <span
      className={
        hovered || hoveredCuboids[transpiledLineIndex] !== undefined
          ? 'bg-primary text-white cursor-pointer outline-primary-4'
          : 'text-success'
      }
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {children}
    </span>
  );
};

VariableNameDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  transpiledLineIndex: PropTypes.number,
};

VariableNameDecorator.defaultProps = {
  transpiledLineIndex: undefined,
};

export default VariableNameDecorator;

export const makeVariableNameDecoratorStrategy = (getAst, cuboidMetadata, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.definitions
      .reduce((invocations, definition) => [...invocations, ...definition.invocations], [])
      .map((invocation) => invocation.assignmentTokens)
      .reduce((allTokens, tokens) => [...allTokens, ...tokens], []);

    // Map cuboid metadata to line indices.
    const tokenToKey = (token) => `${token.start}/${token.end}`;
    const tokenToIndex = new Map();
    if (cuboidMetadata) {
      cuboidMetadata.forEach(({ assignmentToken, transpiledLineIndex }) => {
        tokenToIndex.set(tokenToKey(assignmentToken), transpiledLineIndex);
      });
    }

    // Give assignments that produce cuboids their transpiled line indices.
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights,
      highlights.map((highlight) => ({
        transpiledLineIndex: tokenToIndex.get(tokenToKey(highlight)),
      }))
    );
  }
};
