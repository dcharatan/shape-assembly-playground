import React from 'react';
import PropTypes from 'prop-types';

const DefDecorator = ({ children }) => <span className="text-primary">{children}</span>;

DefDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefDecorator;

export const makeDefDecoratorStrategy = (getAst, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const functions = [ast.entryFunction, ...ast.subfunctions];
    const highlights = functions.map((fn) => fn.defStatement.tokens[0]);
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
