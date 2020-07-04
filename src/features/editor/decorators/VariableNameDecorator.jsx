import React from 'react';
import PropTypes from 'prop-types';

const VariableNameDecorator = ({ children }) => <span className="text-danger">{children}</span>;

VariableNameDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VariableNameDecorator;

export const makeVariableNameDecoratorStrategy = (getAst, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const functions = [ast.entryFunction, ...ast.subfunctions];
    const highlights = [];
    functions.forEach((fn) => {
      fn.assignedVariableTokens.forEach((t) => highlights.push(t));
    });
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
