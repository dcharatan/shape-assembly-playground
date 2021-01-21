/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Popover, Form } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const NumberParameterSlider = ({ range, value, onChange, onExit, targetRef, show }) => {
  const { min, max, step } = range;
  return (
    <Overlay target={targetRef.current} show={show} placement="top">
      {({ ...props }) => (
        <Popover {...props}>
          <Popover.Title as="h3">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="mr-1">Adjust Parameter</div>
              <div className="ml-1">
                <CheckIcon onClick={() => onExit(true)} className="cursor-pointer" />
                <CloseIcon onClick={() => onExit(false)} className="cursor-pointer" />
              </div>
            </div>
          </Popover.Title>
          <Popover.Content>
            <Form.Control
              type="range"
              custom
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => onChange(parseFloat(e.target.value))}
            />
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
