/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useContext } from 'react';
import { ContentBlock, ContentState } from 'draft-js';
import PropTypes from 'prop-types';
import { Popover, Overlay, Form } from 'react-bootstrap';
import SapType from '@dcharatan/shape-assembly-parser/dist/type/SapType';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import SimpleTooltip from '../../../components/SimpleTooltip';
import { PARAMETER_SUBSTITUTION_THRESHOLD, substitute } from '../../executor/executorSlice';
import '../../../index.scss';
import NonSerializableContext from '../../context/NonSerializableContext';
import { editorStateFromText, editorStateToText, getContentBlockOffset } from '../draftUtilities';
import { isNumber } from '../../../utilities';

const FloatParameterDecorator = ({
  children,
  oldValue,
  newValue,
  start,
  end,
  contentBlock,
  contentState,
  functionName,
  type,
}) => {
  const isInteger = type && type.name.includes('integer');
  const context = useContext(NonSerializableContext);
  const initialValue = parseFloat(children[0].props.text);
  const range = 2 * Math.abs(initialValue);

  const [value, setValue] = useState(initialValue);
  const target = useRef(null);

  const offset = getContentBlockOffset(contentState, contentBlock);
  const adjustedStart = start + offset;
  const adjustedEnd = end + offset;

  // Figure out if this decorator is selected as a slider.
  const { selectedParameter, setSelectedParameter } = context;
  const show = selectedParameter.start === adjustedStart && selectedParameter.end === adjustedEnd;
  const toggleShow = () => {
    const alreadyShowingSlider = selectedParameter.start && selectedParameter.end;
    if (!alreadyShowingSlider) {
      setSelectedParameter({ start: adjustedStart, end: adjustedEnd });
    }
  };

  // If there's no substitution and it's a float, show the parameter slider.
  if (oldValue === undefined || newValue === undefined) {
    const modifyCodeWithValue = (modifiedValue) => {
      const text = editorStateToText(context.editorState);
      const { modifiedCode } = substitute(text, [[adjustedStart, adjustedEnd, modifiedValue]], true, isInteger ? 0 : 2);
      return modifiedCode;
    };
    const onChangeSlider = (e) => {
      const newSliderValue = parseFloat(e.target.value);
      context.updateCuboidsSilently(modifyCodeWithValue(newSliderValue));
      setValue(newSliderValue);
    };
    const onExitSlider = (save) => {
      if (save) {
        context.setEditorState(editorStateFromText(modifyCodeWithValue(value)), {
          doNotTriggerParameterSliderDeselection: true,
        });
      } else {
        context.updateCuboidsSilently(modifyCodeWithValue(initialValue));
        setValue(initialValue);
      }
      setSelectedParameter({});
    };

    let min = initialValue - range;
    let max = initialValue + range;
    if (functionName === 'attach') {
      min = 0;
      max = 1;
    }
    min = Math.max(min, 0);
    if (functionName === 'translate' && isInteger) {
      min = 1;
    }

    return (
      <>
        <span
          ref={target}
          onClick={toggleShow}
          className={`${show ? 'slider-parameter-selected' : ''} rounded slider-parameter cursor-pointer`}
        >
          {show ? value : children}
        </span>
        <Overlay target={target.current} show={show} placement="bottom">
          {({ ...props }) => (
            <Popover {...props}>
              <Popover.Title as="h3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="mr-1">Adjust Parameter</div>
                  <div className="ml-1">
                    <CheckIcon onClick={() => onExitSlider(true)} className="cursor-pointer" />
                    <CloseIcon onClick={() => onExitSlider(false)} className="cursor-pointer" />
                  </div>
                </div>
              </Popover.Title>
              <Popover.Content>
                <Form.Control
                  type="range"
                  custom
                  min={min}
                  max={max}
                  step={isInteger ? 1 : 0.01}
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
  functionName: PropTypes.string,
  type: PropTypes.instanceOf(SapType),
};

FloatParameterDecorator.defaultProps = {
  oldValue: undefined,
  newValue: undefined,
  contentBlock: undefined,
  contentState: undefined,
  functionName: undefined,
  type: undefined,
};

export default FloatParameterDecorator;

const gatherFloatParameters = (expressionNode, invocation, tokens, index) => {
  // Parse the token as float. If it's a float (and not an operator, bool, etc.) add it to the list of float parameters.
  if (isNumber(expressionNode.token.text)) {
    tokens.push({
      token: expressionNode.token,
      functionName: invocation.definitionToken.text,
      type: invocation.argumentTypes[index],
    });
  }

  // Handle the children (for operators).
  expressionNode.children.forEach((child) => gatherFloatParameters(child, invocation, tokens, index));
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
        invocation.argumentExpressions.forEach((argumentExpression, index) => {
          gatherFloatParameters(argumentExpression, invocation, floatParameters, index);
        });
      });
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      floatParameters.map((fp) => fp.token),
      floatParameters.map((fp) => ({ contentBlock, contentState, functionName: fp.functionName, type: fp.type }))
    );
  }
};
