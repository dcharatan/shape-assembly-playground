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

const FloatParameterDecorator = ({ children, oldValue, newValue, start, end, contentBlock, contentState }) => {
  const context = useContext(NonSerializableContext);
  const initialValue = parseFloat(children[0].props.text);
  const range = 2 * Math.abs(initialValue);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(initialValue);
  const target = useRef(null);

  // If there's no substitution and it's a float, show the parameter slider.
  if (oldValue === undefined || newValue === undefined) {
    const modifyCodeWithValue = (modifiedValue) => {
      const text = editorStateToText(context.editorState);
      const offset = getContentBlockOffset(contentState, contentBlock);
      const { modifiedCode } = substitute(text, [[start + offset, end + offset, modifiedValue]]);
      return modifiedCode;
    };
    const onChangeSlider = (e) => {
      const newSliderValue = parseFloat(e.target.value);
      context.updateCuboidsSilently(modifyCodeWithValue(newSliderValue));
      setValue(newSliderValue);
    };
    const onExitSlider = () => {
      context.setEditorState(editorStateFromText(modifyCodeWithValue(value)));
    };
    return (
      <>
        <span
          ref={target}
          onClick={() => setShow(!show)}
          className={`${show ? 'slider-parameter-selected' : ''} rounded slider-parameter cursor-pointer`}
        >
          {show ? value.toFixed(2) : children}
        </span>
        <Overlay target={target.current} show={show} placement="bottom" onExit={onExitSlider}>
          {({ ...props }) => (
            <Popover {...props}>
              <Popover.Title as="h3">Adjust Parameter</Popover.Title>
              <Popover.Content>
                <Form.Control
                  type="range"
                  custom
                  min={initialValue - range}
                  max={initialValue + range}
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
};

FloatParameterDecorator.defaultProps = {
  oldValue: undefined,
  newValue: undefined,
  contentBlock: undefined,
  contentState: undefined,
};

export default FloatParameterDecorator;

const gatherFloatParameters = (expressionNode, tokens) => {
  // Parse the token as float. If it's a float (and not an operator, bool, etc.) add it to the list of float parameters.
  const asFloat = parseFloat(expressionNode.token.text);
  if (!Number.isNaN(asFloat)) {
    tokens.push(expressionNode.token);
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
  } else {
    // Gather float parameters.
    const ast = getAst();
    const tokens = [];
    ast.definitions.forEach((definition) => {
      definition.invocations.forEach((invocation) => {
        invocation.argumentExpressions.forEach((argumentExpression) => {
          gatherFloatParameters(argumentExpression, tokens);
        });
      });
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      tokens,
      tokens.map(() => ({ contentBlock, contentState }))
    );
  }
};
