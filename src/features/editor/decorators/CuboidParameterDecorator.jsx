import React from 'react';
import PropTypes from 'prop-types';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';
import { tokenPropType } from '../tokenUtilities';

const CuboidParameterDecorator = ({ children, token }) => (
  <HoverableCuboidDecorator token={token}>{children}</HoverableCuboidDecorator>
);
CuboidParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  token: tokenPropType.isRequired,
};

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
    // Gather cuboid parameters.
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
