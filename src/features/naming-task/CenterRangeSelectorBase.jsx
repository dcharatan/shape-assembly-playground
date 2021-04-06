/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const CenterRangeSelectorBase = ({ onConfirm, placeholder, buttonText, ...props }) => {
  const [value, setValue] = useState('');
  return (
    <div {...props}>
      <InputGroup>
        <FormControl
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="sm"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onConfirm(value);
            }
          }}
        />
        <InputGroup.Append>
          <Button onClick={() => onConfirm(value)} size="sm" variant="secondary">
            {buttonText}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

CenterRangeSelectorBase.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CenterRangeSelectorBase;
