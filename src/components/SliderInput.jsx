import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SliderInput = ({ value, onChange, min, max, step, animation }) => {
  const [textValue, setTextValue] = useState(undefined);
  const animationDirection = useRef(1);
  const defaultValue = (max + min) * 0.5;

  useEffect(() => {
    if (animation) {
      const { step: animationStep, fps } = animation;
      const interval = setInterval(() => {
        let newValue = (value ?? defaultValue) + animationDirection.current * animationStep;
        if (newValue < min) {
          newValue = min;
          animationDirection.current *= -1;
        }
        if (newValue > max) {
          newValue = max;
          animationDirection.current *= -1;
        }
        setTextValue(newValue.toFixed(2));
        onChange(newValue);
      }, 1000 / fps);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [animation, defaultValue, max, min, onChange, value]);

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
        disabled={!!animation}
      />
      <Form.Control
        type="range"
        custom
        min={min}
        max={max}
        step={step}
        value={value ?? defaultValue}
        onChange={(e) => {
          onChange(parseFloat(e.target.value));
          setTextValue(undefined);
        }}
        className="ml-1"
        disabled={!!animation}
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
  animation: PropTypes.shape({
    step: PropTypes.number.isRequired,
    fps: PropTypes.number.isRequired,
  }),
};

SliderInput.defaultProps = {
  value: undefined,
  min: 0,
  max: 1,
  step: 0.01,
  animation: undefined,
};

export default SliderInput;
