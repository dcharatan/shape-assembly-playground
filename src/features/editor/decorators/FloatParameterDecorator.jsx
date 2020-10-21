import React from 'react';
import PropTypes from 'prop-types';
import SimpleTooltip from '../../../components/SimpleTooltip';
import { PARAMETER_SUBSTITUTION_THRESHOLD } from '../../executor/executorSlice';

const FloatParameterDecorator = ({ children, oldValue, newValue }) => {
  if (
    oldValue === undefined ||
    newValue === undefined ||
    Math.abs(oldValue - newValue) < PARAMETER_SUBSTITUTION_THRESHOLD
  ) {
    return children;
  }

  const text = (
    <>
      {`Old value: ${oldValue.toFixed(2)}`}
      <br />
      {`New value: ${newValue.toFixed(2)}`}
    </>
  );
  return (
    <SimpleTooltip text={text}>
      <span className="text-white outline-purple">{children}</span>
    </SimpleTooltip>
  );
};

FloatParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  oldValue: PropTypes.number,
  newValue: PropTypes.number,
};

FloatParameterDecorator.defaultProps = {
  oldValue: undefined,
  newValue: undefined,
};

export default FloatParameterDecorator;

export const makeFloatParameterDecoratorStrategy = (optimizedParameters, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  if (optimizedParameters) {
    // The optimized parameters have .start and .end, so they can be passed d2irectly.
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      optimizedParameters,
      optimizedParameters.map(({ oldValue, newValue }) => ({ oldValue, newValue }))
    );
  }
};
