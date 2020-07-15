import React from 'react';
import PropTypes from 'prop-types';

const DefDecorator = ({ children }) => (
  <span className="text-danger" style={{ textDecoration: 'underline', backgroundColor: '#ffeeee' }}>
    {children}
  </span>
);

DefDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefDecorator;

export const makeErrorDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.errors;
    applyStrategy(contentBlock, callback, contentState, highlights);
  }
};
