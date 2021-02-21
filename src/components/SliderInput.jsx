import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SliderInput = ({ value, onChange, min, max, step }) => {
  const [textValue, setTextValue] = useState(undefined);

  const isTextValid = (text) => {
    const textFloat = parseFloat(text);
    return (
      /^-?\d*\.?\d*$/.test(text) && // The text should be a number without extra random characters.
      !Number.isNaN(textFloat) &&
      textFloat <= max &&
      textFloat >= min &&
      (textFloat % 1 === 0 || step !== 1)
    );
  };

  return (
    <div className="d-flex flex-row align-items-center">
      <Form.Control
        type="text"
        value={textValue ?? value ?? 'Unset'}
        onChange={(e) => {
          const newValue = e.target.value;
          if (isTextValid(newValue)) {
            onChange(parseFloat(newValue));
          }
          setTextValue(newValue);
        }}
        isInvalid={textValue !== undefined && !isTextValid(textValue)}
        style={{ width: '5rem' }}
        className="mr-1"
      />
      <Form.Control
        type="range"
        custom
        min={min}
        max={max}
        step={step}
        value={value ?? 0.5}
        onChange={(e) => {
          onChange(parseFloat(e.target.value));
          setTextValue(undefined);
        }}
        className="ml-1"
      />
    </div>
  );
};

SliderInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

SliderInput.defaultProps = {
  value: undefined,
  min: 0,
  max: 1,
  step: 0.01,
};

export default SliderInput;
