import React from 'react';
import PropTypes from 'prop-types';

const DefDecorator = ({ children }) => <span className="text-primary">{children}</span>;

DefDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefDecorator;

export const makeDefDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const errors = new Set(ast.errors.map((error) => error.token));
    const highlights = ast.definitions
      .map((definition) => definition.declaration.nameToken)
      .filter((token) => !errors.has(token));
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
