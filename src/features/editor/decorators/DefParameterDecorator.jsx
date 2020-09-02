import React from 'react';
import PropTypes from 'prop-types';

const DefParameterDecorator = ({ children, argumentType }) => (
  <span className="text-success">
    {children}
    <span className="text-secondary">{`: ${argumentType.name}`}</span>
  </span>
);

DefParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  argumentType: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefParameterDecorator;

export const makeDefParameterDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.definitions
      .map((definition) => definition.declaration.parameterTokens)
      .reduce((tokens, newTokens) => [...tokens, ...newTokens], []);
    const props = ast.definitions
      .filter((definition) => !definition.isBuiltIn)
      .map((definition) => definition.argumentTypes)
      .reduce((argumentTypes, newArgumentTypes) => [...argumentTypes, ...newArgumentTypes], [])
      .map((argumentType) => ({ argumentType }));
    applyStrategy(contentBlock, callback, contentState, highlights, props);
  }
};
