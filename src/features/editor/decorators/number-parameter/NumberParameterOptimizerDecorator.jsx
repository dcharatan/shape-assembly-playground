import React from 'react';
import PropTypes from 'prop-types';
import SimpleTooltip from '../../../../components/SimpleTooltip';
import { PARAMETER_SUBSTITUTION_THRESHOLD } from '../../../executor/executorSlice';
import '../../../../index.scss';

const NumberParameterOptimizerDecorator = ({ children, oldValue, newValue }) => {
  // If there's a substitution that's too small to be valid, show the unchanged value.
  if (Math.abs(oldValue - newValue) < PARAMETER_SUBSTITUTION_THRESHOLD) {
    return children;
  }

  // If there's a large enough substitution, show the tooltip.
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

NumberParameterOptimizerDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  oldValue: PropTypes.number,
  newValue: PropTypes.number,
};

NumberParameterOptimizerDecorator.defaultProps = {
  oldValue: undefined,
  newValue: undefined,
};

export default NumberParameterOptimizerDecorator;

export const makeNumberParameterOptimizerDecoratorStrategy = (optimizedParameters, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  // Optimization is disabled for the editing task.
  if (!window.location.pathname.includes('editing-task') && optimizedParameters) {
    // The optimized parameters have .start and .end, so they can be passed directly.
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      optimizedParameters,
      optimizedParameters.map(({ oldValue, newValue }) => ({ oldValue, newValue }))
    );
  }
};
