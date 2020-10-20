import React from 'react';
import PropTypes from 'prop-types';

const ReturnDecorator = ({ children }) => <span className="text-secondary">{children}</span>;

ReturnDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReturnDecorator;

export const makeReturnDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const tokens = ast.definitions
      .map((definition) => definition?.returnStatement?.returnToken)
      .filter((token) => !!token);
    applyStrategy(contentBlock, callback, contentState, tokens);
  }
};
