import React from 'react';
import PropTypes from 'prop-types';

const DefParameterDecorator = ({ children }) => <span className="text-success">{children}</span>;

DefParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefParameterDecorator;

export const makeDefParameterDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.definitions
      .map((definition) => definition.declaration.parameterTokens)
      .reduce((tokens, newTokens) => [...tokens, ...newTokens], []);
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
