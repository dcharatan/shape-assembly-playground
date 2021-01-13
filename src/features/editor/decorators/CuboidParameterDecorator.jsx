import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { isNumber } from '../../../utilities';
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
  const cuboidDeclarationToken = metadata.cuboidUsageMap.get(tokenToKey(token));
  if (cuboidDeclarationToken === undefined) {
    return children;
  }
  const cuboidLine = metadata.tokenLineMap.get(tokenToKey(cuboidDeclarationToken));
  if (cuboidLine === undefined) {
    return children;
  }
  const transpiledLineIndices = metadata.invocationLineMap.get(cuboidLine);

  const onHover = (newHoveredValue) => {
    // Mark them as selected.
    const selection = {};
    transpiledLineIndices.forEach((index) => {
      selection[index] = 'primary';
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
      transpiledLineIndices={transpiledLineIndices}
      color={COLOR_SECONDARY}
    >
      {children}
    </HoverableCuboidDecorator>
  );
};
CuboidParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
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
    const exclude = ['True', 'False', 'def', 'X', 'Y', 'Z', 'right', 'left', 'top', 'bot', 'front', 'back', 'return'];

    // Gather float parameters.
    const ast = getAst();
    const highlights = [];
    ast.definitions.forEach((definition) => {
      definition.invocations.forEach((invocation) => {
        invocation.argumentExpressions.forEach((e, index) => {
          if (!e.children.length && !isNumber(e.token.text) && !exclude.includes(e.token.text)) {
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
