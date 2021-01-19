import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setTranspiledLinesHovered, setTranspiledLinesNotHovered } from '../editorSlice';
import NonSerializableContext from '../../context/NonSerializableContext';
import HighlightDecorator from './HighlightDecorator';

const InvocationFunctionNameDecorator = ({ children, token }) => {
  const { metadata } = useContext(NonSerializableContext);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const color = '#6c757d';
  if (!metadata) {
    return <span style={{ color }}>{children}</span>;
  }

  // Define some helper functions.
  const tokenToKey = (t) => `${t.start}/${t.end}`;
  const highlights = metadata.get(tokenToKey(token));
  if (!highlights) {
    // This happens if the function containing this invocation hasn't been called.
    return <span style={{ color }}>{children}</span>;
  }

  const onHover = (newHoveredValue) => {
    const selection = {};
    highlights.forEach(({ line, variant }) => {
      selection[line] = variant;
    });

    setHovered(newHoveredValue);
    if (newHoveredValue) {
      dispatch(setTranspiledLinesHovered(selection));
    } else {
      dispatch(setTranspiledLinesNotHovered(Object.keys(selection)));
    }
  };

  return (
    <HighlightDecorator highlightColor={color} highlighted={hovered} color={color} onHover={onHover}>
      {children}
    </HighlightDecorator>
  );
};

InvocationFunctionNameDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }).isRequired,
};

export default InvocationFunctionNameDecorator;

export const makeInvocationFunctionNameDecorator = (getAst, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = [];
    ast.definitions.forEach((definition) => {
      if (!definition.isFromPrefix) {
        highlights.push(...definition.invocations.map((invocation) => invocation.definitionToken));
      }
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights,
      highlights.map((token) => ({ token }))
    );
  }
};
