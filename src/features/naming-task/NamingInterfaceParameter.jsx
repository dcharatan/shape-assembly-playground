import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SliderInput from '../../components/SliderInput';
import SelectionBox from './SelectionBox';
import NameField from './NameField';

const NamingInterfaceParameter = ({ selected, name, onConfirm }) => {
  const [value, setValue] = useState(0.5);
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
};

NamingInterfaceParameter.defaultProps = {
  selected: false,
  name: '',
  onConfirm: () => {},
};

export default NamingInterfaceParameter;
