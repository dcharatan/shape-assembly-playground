import React from 'react';
import PropTypes from 'prop-types';

const LineHighlightDecorator = ({ children }) => <span className="bg-primary text-white">{children}</span>;

LineHighlightDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LineHighlightDecorator;

export const makeLineHighlightDecoratorStrategy = (lineIndices, transpiled) => (contentBlock, callback) => {
  if (!transpiled) {
    return;
  }
  lineIndices.forEach((lineIndex) => {
    const needle = transpiled.split('\n')[lineIndex];
    const text = contentBlock.getText();
    const charIndex = text.indexOf(needle);
    if (charIndex !== -1) {
      callback(charIndex, charIndex + needle.length);
    }
  });
};
