import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.scss';

const NumberParameterPlaceholderDecorator = ({ value }) => (
  <span className="slider-parameter-selected rounded slider-parameter">{value}</span>
);

NumberParameterPlaceholderDecorator.propTypes = {
  value: PropTypes.string.isRequired,
};

export default NumberParameterPlaceholderDecorator;

export const makeNumberParameterPlaceholderDecoratorStrategy = (fakeParameters, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  if (window.location.pathname.includes('editing-task') && fakeParameters) {
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      fakeParameters.map((x) => x.token),
      fakeParameters
    );
  }
};
