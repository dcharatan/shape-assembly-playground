/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setParameterBounds } from './namingTaskSlice';
import CenterRangeSelectorBase from './CenterRangeSelectorBase';

const RangeSelector = ({ parameterIndex, ...props }) => {
  const dispatch = useDispatch();
  const taskIndex = useSelector((state) => state.namingTaskSlice.taskIndex);
  const onConfirm = (range) => {
    const update = {
      [taskIndex]: {
        [parameterIndex]: {
          range,
        },
      },
    };
    dispatch(setParameterBounds(update));
  };

  return <CenterRangeSelectorBase placeholder="Range" buttonText="Set Range" onConfirm={onConfirm} {...props} />;
};

RangeSelector.propTypes = {
  parameterIndex: PropTypes.number.isRequired,
};

export default RangeSelector;
