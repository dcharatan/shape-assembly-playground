import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NonSerializableContext from '../../context/NonSerializableContext';
import { setTranspiledLinesHovered, setTranspiledLinesNotHovered } from '../editorSlice';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';
import { COLOR_SECONDARY } from '../../../colors';

const CuboidParameterDecorator = ({ children, token }) => {
  const { metadata } = useContext(NonSerializableContext);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const tokenToKey = (t) => `${t.start}/${t.end}`;

  // Get the originals' transpiled line indices.
  const highlights = metadata.get(tokenToKey(token));
  if (!highlights) {
    console.error(token);
    return children;
  }

  const onHover = (newHoveredValue) => {
    // Mark them as selected.
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
    <HoverableCuboidDecorator
      hovered={hovered}
      onHover={onHover}
      transpiledLineIndices={highlights.map((h) => h.line)}
      color={COLOR_SECONDARY}
    >
      {children}
    </HoverableCuboidDecorator>
  );
};
CuboidParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }).isRequired,
};

CuboidParameterDecorator.defaultProps = {};

export default CuboidParameterDecorator;

export const makeCuboidParameterDecoratorStrategy = (getAst, optimizedParameters, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  if (optimizedParameters) {
    // The optimized parameters have .start and .end, so they can be passed directly.
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      optimizedParameters,
      optimizedParameters.map(({ oldValue, newValue }) => ({ oldValue, newValue }))
    );
  } else {
    // Gather float parameters.
    const ast = getAst();
    const highlights = [];
    ast.definitions.forEach((definition) => {
      definition.invocations.forEach((invocation) => {
        invocation.argumentExpressions.forEach((e, index) => {
          if (invocation.argumentTypes[index].name === 'block') {
            highlights.push({ token: e.token, index });
          }
        });
      });
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights.map((c) => c.token),
      highlights
    );
  }
};
