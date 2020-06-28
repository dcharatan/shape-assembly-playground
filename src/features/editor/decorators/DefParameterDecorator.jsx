import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DefParameterDecorator = ({ children }) => <Badge variant="primary">{children}</Badge>;

DefParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefParameterDecorator;

export const makeDefParameterDecoratorStrategy = (getAst, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const functions = [ast.entryFunction, ...ast.subfunctions];
    const highlights = [];
    functions.forEach((fn) => {
      fn.parameterTokens.forEach((t) => highlights.push(t));
    });
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
