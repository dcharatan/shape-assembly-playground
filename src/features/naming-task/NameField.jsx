/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NameField = ({ onConfirm, type, disabled, ...props }) => {
  const [text, setText] = useState('');

  return (
    <div {...props}>
      <InputGroup>
        <FormControl
          placeholder={`${type} Name`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onConfirm(text);
            }
          }}
        />
        <InputGroup.Append>
          <Button onClick={() => onConfirm(text)} disabled={disabled}>
            Confirm
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

NameField.propTypes = {
  type: PropTypes.string,
  onConfirm: PropTypes.func,
  disabled: PropTypes.bool,
};

NameField.defaultProps = {
  type: 'Parameter',
  onConfirm: () => {},
  disabled: false,
};

export default NameField;
