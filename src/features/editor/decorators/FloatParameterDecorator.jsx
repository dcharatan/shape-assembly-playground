import React from 'react';
import PropTypes from 'prop-types';
import SimpleTooltip from '../../../components/SimpleTooltip';

const CHANGE_THRESHOLD = 0.01;

const FloatParameterDecorator = ({ children, oldValue, newValue }) => {
  if (oldValue === undefined || newValue === undefined || Math.abs(oldValue - newValue) < CHANGE_THRESHOLD) {
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
      <span style={{ backgroundColor: '#b603fc' }} className="text-white p-1 rounded">
        {children}
      </span>
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
