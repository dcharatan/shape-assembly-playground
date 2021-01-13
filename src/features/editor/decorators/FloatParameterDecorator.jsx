/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useContext } from 'react';
import { ContentBlock, ContentState } from 'draft-js';
import PropTypes from 'prop-types';
import { Popover, Overlay, Form } from 'react-bootstrap';
import SimpleTooltip from '../../../components/SimpleTooltip';
import { PARAMETER_SUBSTITUTION_THRESHOLD, substitute } from '../../executor/executorSlice';
import '../../../index.scss';
import NonSerializableContext from '../../context/NonSerializableContext';
import { editorStateFromText, editorStateToText, getContentBlockOffset } from '../draftUtilities';
import { isNumber } from '../../../utilities';

const FloatParameterDecorator = ({ children, oldValue, newValue, start, end, contentBlock, contentState, type }) => {
  const context = useContext(NonSerializableContext);
  const initialValue = parseFloat(children[0].props.text);
  const range = 2 * Math.abs(initialValue);

  const offset = getContentBlockOffset(contentState, contentBlock);
  const adjustedStart = start + offset;
  const adjustedEnd = end + offset;

  // Figure out if this decorator is selected as a slider.
  const { selectedParameter, setSelectedParameter } = context;
  const show = selectedParameter.start === adjustedStart && selectedParameter.end === adjustedEnd;
  const toggleShow = () => {
    setSelectedParameter(
      selectedParameter.start && selectedParameter.end ? {} : { start: adjustedStart, end: adjustedEnd }
    );
  };

  const [value, setValue] = useState(initialValue);
  const target = useRef(null);

  // If there's no substitution and it's a float, show the parameter slider.
  if (oldValue === undefined || newValue === undefined) {
    const modifyCodeWithValue = (modifiedValue) => {
      const text = editorStateToText(context.editorState);
      const { modifiedCode } = substitute(text, [[adjustedStart, adjustedEnd, modifiedValue]]);
      return modifiedCode;
    };
    const onChangeSlider = (e) => {
      const newSliderValue = parseFloat(e.target.value);
      context.updateCuboidsSilently(modifyCodeWithValue(newSliderValue));
      setValue(newSliderValue);
    };
    const onExitSlider = () => {
      context.setEditorState(editorStateFromText(modifyCodeWithValue(value)), {
        doNotTriggerParameterSliderDeselection: true,
      });
    };

    let min = initialValue - range;
    let max = initialValue + range;
    if (type === 'attach') {
      min = 0;
      max = 1;
    }
    min = Math.max(min, 0);

    return (
      <>
        <span
          ref={target}
          onClick={toggleShow}
          className={`${show ? 'slider-parameter-selected' : ''} rounded slider-parameter cursor-pointer`}
        >
          {show ? value : children}
        </span>
        <Overlay target={target.current} show={show} placement="bottom" onExit={onExitSlider}>
          {({ ...props }) => (
            <Popover {...props}>
              <Popover.Title as="h3">Adjust Parameter</Popover.Title>
              <Popover.Content>
                <Form.Control
                  type="range"
                  custom
                  min={min}
                  max={max}
                  step={0.01}
                  value={value}
                  onChange={onChangeSlider}
                />
              </Popover.Content>
            </Popover>
          )}
        </Overlay>
      </>
    );
  }

  // If there's a substitution that's too small to be valid, show the unchanged value.
  if (Math.abs(oldValue - newValue) < PARAMETER_SUBSTITUTION_THRESHOLD) {
    return children;
  }

  // If there's a large enough substitution, show the tooltip.
  const text = (
    <>
      {`Old value: ${oldValue.toFixed(2)}`}
      <br />
      {`New value: ${newValue.toFixed(2)}`}
    </>
  );
  return (
    <SimpleTooltip text={text}>
      <span className="text-white outline-purple">{children}</span>
    </SimpleTooltip>
  );
};

FloatParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  oldValue: PropTypes.number,
  newValue: PropTypes.number,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  contentBlock: PropTypes.instanceOf(ContentBlock),
  contentState: PropTypes.instanceOf(ContentState),
  type: PropTypes.string,
};

FloatParameterDecorator.defaultProps = {
  oldValue: undefined,
  newValue: undefined,
  contentBlock: undefined,
  contentState: undefined,
  type: undefined,
};

export default FloatParameterDecorator;

const gatherFloatParameters = (expressionNode, invocation, tokens) => {
  // Parse the token as float. If it's a float (and not an operator, bool, etc.) add it to the list of float parameters.
  if (isNumber(expressionNode.token.text)) {
    tokens.push({
      token: expressionNode.token,
      type: invocation.definitionToken.text,
    });
  }

  // Handle the children (for operators).
  expressionNode.children.forEach((child) => gatherFloatParameters(child, tokens));
};

export const makeFloatParameterDecoratorStrategy = (getAst, optimizedParameters, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  if (optimizedParameters) {
    // The optimized parameters have .start and .end, so they can be passed directly.
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      optimizedParameters,
      optimizedParameters.map(({ oldValue, newValue }) => ({ oldValue, newValue }))
    );
  } else if (window.location.pathname.includes('editing-task')) {
    // Gather float parameters.
    const ast = getAst();
    const floatParameters = [];
    ast.definitions.forEach((definition) => {
      definition.invocations.forEach((invocation) => {
        invocation.argumentExpressions.forEach((argumentExpression) => {
          gatherFloatParameters(argumentExpression, invocation, floatParameters);
        });
      });
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      floatParameters.map((fp) => fp.token),
      floatParameters.map((fp) => ({ contentBlock, contentState, type: fp.type }))
    );
  }
};
