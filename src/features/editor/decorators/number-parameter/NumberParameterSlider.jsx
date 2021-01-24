/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Popover, Form } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';

const NumberParameterSlider = ({ range, value, onChange, onExit, targetRef, show }) => {
  const { min, max, step } = range;
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

  const handleClick = (e) => {
    let ignoredClick = false;
    document.querySelectorAll('.NumberParameterSlider').forEach((item) => {
      if (item.contains(e.target)) {
        ignoredClick = true;
      }
    });
    document.querySelectorAll('.NumberParameterSliderDecorator').forEach((item) => {
      if (item.contains(e.target)) {
        ignoredClick = true;
      }
    });
    if (show && !ignoredClick) {
      onExit(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  });

  return (
    <Overlay target={targetRef.current} show={show} placement="top">
      {({ ...props }) => (
        <Popover {...props} className="NumberParameterSlider">
          <Popover.Title as="h3">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="mr-1">Adjust Parameter</div>
              <div className="ml-1">
                <CloseIcon onClick={() => onExit(false)} className="cursor-pointer" />
              </div>
            </div>
          </Popover.Title>
          <Popover.Content>
            <div className="d-flex flex-row align-items-center">
              <Form.Control
                type="text"
                value={textValue ?? value}
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
                value={value}
                onChange={(e) => {
                  onChange(parseFloat(e.target.value));
                  setTextValue(undefined);
                }}
                className="ml-1"
              />
            </div>
          </Popover.Content>
        </Popover>
      )}
    </Overlay>
  );
};

NumberParameterSlider.propTypes = {
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onExit: PropTypes.func,
  show: PropTypes.bool,
  targetRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

NumberParameterSlider.defaultProps = {
  onChange: () => {},
  onExit: () => {},
  show: false,
};

export default NumberParameterSlider;
