import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SliderInput from '../../components/SliderInput';
import SelectionBox from './SelectionBox';
import NameField from './NameField';
import { setParameterValue } from './namingTaskSlice';

const NamingInterfaceParameter = ({ selected, name, onConfirm, index }) => {
  const parameterValues = useSelector((state) => state.namingTaskSlice.parameterValues);
  const value = parameterValues[index];
  const dispatch = useDispatch();
  const setValue = (newValue) => dispatch(setParameterValue({ index, newValue }));
  return (
    <SelectionBox selected={selected}>
      <div className="border-bottom mb-2 pb-1">{name}</div>
      <SliderInput value={value} onChange={setValue} />
      {selected ? <NameField className="mt-2" onConfirm={onConfirm} /> : null}
    </SelectionBox>
  );
};

NamingInterfaceParameter.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  onConfirm: PropTypes.func,
  index: PropTypes.number.isRequired,
};

NamingInterfaceParameter.defaultProps = {
  selected: false,
  name: '',
  onConfirm: () => {},
};

export default NamingInterfaceParameter;
