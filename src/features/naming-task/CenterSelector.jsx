/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setParameterBounds } from './namingTaskSlice';
import CenterRangeSelectorBase from './CenterRangeSelectorBase';

const CenterSelector = ({ parameterIndex, shapeIndex, ...props }) => {
  const dispatch = useDispatch();
  const taskIndex = useSelector((state) => state.namingTaskSlice.taskIndex);
  const onConfirm = (center) => {
    const update = {
      [taskIndex]: {
        [parameterIndex]: {
          centers: {
            [shapeIndex]: center,
          },
        },
      },
    };
    dispatch(setParameterBounds(update));
  };

  return <CenterRangeSelectorBase placeholder="Center" buttonText="Set Center" onConfirm={onConfirm} {...props} />;
};

CenterSelector.propTypes = {
  parameterIndex: PropTypes.number.isRequired,
  shapeIndex: PropTypes.number.isRequired,
};

export default CenterSelector;
