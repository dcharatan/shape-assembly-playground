import React from 'react';
import PropTypes from 'prop-types';

const VariableNameDecorator = ({ children }) => <span className="text-success">{children}</span>;

VariableNameDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VariableNameDecorator;

export const makeVariableNameDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.definitions
      .reduce((invocations, definition) => [...invocations, ...definition.invocations], [])
      .filter((invocation) => invocation.assignmentToken)
      .map((invocation) => invocation.assignmentToken);
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
