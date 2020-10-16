import React from 'react';
import PropTypes from 'prop-types';
import SimpleTooltip from '../../../components/SimpleTooltip';

const ErrorDecorator = ({ children, message }) => (
  <SimpleTooltip text={message ?? 'idk'}>
    <span className="text-danger" style={{ textDecoration: 'underline', backgroundColor: '#ffeeee' }}>
      {children}
    </span>
  </SimpleTooltip>
);

ErrorDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorDecorator;

export const makeErrorDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.errors;
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights,
      highlights.map((e) => ({ message: e.message }))
    );
  }
};
