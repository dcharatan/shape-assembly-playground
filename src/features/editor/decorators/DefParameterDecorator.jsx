import React from 'react';
import PropTypes from 'prop-types';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';
import { tokenPropType } from '../tokenUtilities';

const DefParameterDecorator = ({ children, argumentType, token }) => {
  if (argumentType.name === 'block') {
    return <HoverableCuboidDecorator token={token}>{children}</HoverableCuboidDecorator>;
  }
  return <span style={{ color: '#28a745' }}>{children}</span>;
};

DefParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  argumentType: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  token: tokenPropType.isRequired,
};

export default DefParameterDecorator;

export const makeDefParameterDecoratorStrategy = (getAst, metadata, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = [];
    const props = [];

    // Find all parameters in function declarations.
    ast.definitions.forEach((definition) => {
      if (!definition.isBuiltIn) {
        definition.declaration.parameterTokens.forEach((parameterToken, index) => {
          highlights.push(parameterToken);
          props.push({
            token: parameterToken,
            argumentType: definition.argumentTypes[index],
          });
        });
      }
    });

    applyStrategy(contentBlock, callback, contentState, highlights, props);
  }
};
