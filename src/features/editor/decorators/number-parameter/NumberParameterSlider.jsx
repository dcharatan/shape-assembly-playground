/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Popover, Form } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { editorStateToText } from '../../draftUtilities';
import { substitute } from '../../../executor/executorSlice';
import NonSerializableContext from '../../../context/NonSerializableContext';

const NumberParameterSlider = ({ targetRef, thisStart, thisEnd }) => {
  const {
    selectedParameter,
    editorState,
    updateCuboidsSilently,
    setSelectedParameterValue,
    deselectCurrentParameter,
  } = useContext(NonSerializableContext);
  const [textValue, setTextValue] = useState(undefined);
  if (!selectedParameter) {
    return null;
  }

  const { start, end, selection, value, isInteger, initialValue, min, max, step } = selectedParameter ?? {};
  if (!targetRef?.current || thisStart !== start || thisEnd !== end) {
    return null;
  }

  // This is used for text substitution in updates.
  const modifyCodeWithValue = (modifiedValue) => {
    const text = editorStateToText(editorState);
    const { modifiedCode } = substitute(text, [[start, end, modifiedValue]], true, isInteger ? 0 : 2);
    return modifiedCode;
  };

  // Silently update the cuboids when the slider is changed.
  const onChange = (newSliderValue) => {
    updateCuboidsSilently(modifyCodeWithValue(newSliderValue));
    setSelectedParameterValue(newSliderValue);
  };

  // On exit, save or reset the slider value.
  const onExit = (save) => deselectCurrentParameter(save);

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
    <Overlay target={targetRef} show={!!selectedParameter} placement="top">
      {({ ...props }) => (
        <Popover {...props} className="NumberParameterSlider">
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
  targetRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default NumberParameterSlider;
