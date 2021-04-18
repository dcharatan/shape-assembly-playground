/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NameField = ({ onConfirm, type, disabled, rename, initialName, ...props }) => {
  const [text, setText] = useState(initialName);

  return (
    <div {...props}>
      <InputGroup>
        <FormControl
          autoFocus
          placeholder={`${type} Name`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onConfirm(text, rename);
            }
          }}
        />
        <InputGroup.Append>
          <Button onClick={() => onConfirm(text, rename)} disabled={disabled}>
            {rename ? 'Rename' : 'Set Name'}
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
  rename: PropTypes.bool,
  initialName: PropTypes.string,
};

NameField.defaultProps = {
  type: 'Parameter',
  onConfirm: () => {},
  disabled: false,
  rename: false,
  initialName: '',
};

export default NameField;
