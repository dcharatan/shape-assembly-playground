/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useContext } from 'react';
import { ContentBlock, ContentState } from 'draft-js';
import PropTypes from 'prop-types';
import SapType from '@dcharatan/shape-assembly-parser/dist/type/SapType';
import Invocation from '@dcharatan/shape-assembly-parser/dist/invocation/Invocation';
import { useDispatch } from 'react-redux';
import { substitute } from '../../../executor/executorSlice';
import '../../../../index.scss';
import NonSerializableContext from '../../../context/NonSerializableContext';
import { editorStateFromText, editorStateToText, getContentBlockOffset } from '../../draftUtilities';
import NumberParameterSlider from './NumberParameterSlider';
import { isNumber } from '../../../../utilities';
import { setTranspiledLinesNotSelected, setTranspiledLinesSelected } from '../../editorSlice';

const NumberParameterSliderDecorator = ({
  children,
  start,
  end,
  contentBlock,
  contentState,
  functionName,
  parentFunctionName,
  rangeType,
  type,
  invocation,
}) => {
  // Call hooks.
  const {
    selectedParameter,
    setSelectedParameter,
    subassemblyBounds,
    editorState,
    updateCuboidsSilently,
    setEditorState,
    fakeParameters,
    metadata,
  } = useContext(NonSerializableContext);
  const dispatch = useDispatch();
  const initialValue = parseFloat(children[0].props.text);
  const [value, setValue] = useState(initialValue);
  const target = useRef(null);

  // Figure out the highlights.
  const tokenToKey = (t) => `${t.start}/${t.end}`;
  const highlights = metadata.get(tokenToKey(invocation.definitionToken)) ?? [];
  const selection = {};
  highlights.forEach(({ line, variant }) => {
    selection[line] = variant;
  });

  // Figure out if this decorator is selected as a slider.
  const offset = getContentBlockOffset(contentState, contentBlock);
  const adjustedStart = start + offset;
  const adjustedEnd = end + offset;
  const show = selectedParameter.start === adjustedStart && selectedParameter.end === adjustedEnd;
  const toggleShow = () => {
    const alreadyShowingSlider = selectedParameter.start && selectedParameter.end;
    if (!alreadyShowingSlider) {
      dispatch(setTranspiledLinesSelected(selection));
      setSelectedParameter({ start: adjustedStart, end: adjustedEnd });
    }
  };

  // Show a placeholder if another slider is being slid.
  const fakeParameter = fakeParameters.find((p) => p.token.start === adjustedStart && p.token.end === adjustedEnd);
  if (fakeParameter && !show) {
    return <span className="rounded slider-parameter-affected">{fakeParameter.value}</span>;
  }

  // This is used for text substitution in updates.
  const isInteger = type && type.name.includes('integer');
  const modifyCodeWithValue = (modifiedValue) => {
    const text = editorStateToText(editorState);
    const { modifiedCode } = substitute(text, [[adjustedStart, adjustedEnd, modifiedValue]], true, isInteger ? 0 : 2);
    return modifiedCode;
  };

  // Silently update the cuboids when the slider is changed.
  const onChangeSlider = (newSliderValue) => {
    updateCuboidsSilently(modifyCodeWithValue(newSliderValue));
    setValue(newSliderValue);
  };

  // On exit, save or reset the slider value.
  const onExitSlider = (save) => {
    if (save) {
      const text = editorStateToText(editorState);
      const substitutions = [
        [adjustedStart, adjustedEnd, value],
        ...fakeParameters.map((f) => [f.token.start, f.token.end, f.value]),
      ];
      const { modifiedCode } = substitute(text, substitutions, true, isInteger ? 0 : 2);
      setEditorState(editorStateFromText(modifiedCode), {
        doNotTriggerParameterSliderDeselection: true,
        saveToHistory: true,
      });
    } else {
      updateCuboidsSilently(modifyCodeWithValue(initialValue));
      setValue(initialValue);
    }
    dispatch(setTranspiledLinesNotSelected(Object.keys(selection)));
    setSelectedParameter({});
  };

  // Calculate the slider range.
  let min = 0;
  let max = Math.max(initialValue + 2 * Math.abs(initialValue), 0.15);
  if (functionName === 'attach') {
    max = 1;
  }
  const isRootBbox =
    parentFunctionName === 'make_root_assembly' &&
    invocation.assignmentTokens.length === 1 &&
    invocation.assignmentTokens[0].text === 'bbox';
  if (Array.isArray(rangeType) && rangeType.length > 0 && !isRootBbox) {
    max = 0;
    rangeType.forEach((rt) => {
      if (Array.isArray(rt)) {
        max = Math.max(max, rangeType[1]);
      } else if (['bbox_x', 'bbox_y', 'bbox_z'].includes(rt)) {
        const bbox = subassemblyBounds[parentFunctionName];
        if (bbox) {
          const rMax = bbox[rt];
          if (rMax) {
            max = Math.max(rMax, max);
          }
        }
      } else if (rt === 'unit') {
        max = Math.max(max, 1);
      }
    });
  }
  if (functionName === 'translate' && isInteger) {
    min = 1;
    max = 10;
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
      <NumberParameterSlider
        show={show}
        range={{ min, max, step: isInteger ? 1 : 0.01 }}
        targetRef={target}
        onExit={onExitSlider}
        value={value}
        onChange={onChangeSlider}
      />
    </>
  );
};

NumberParameterSliderDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  contentBlock: PropTypes.instanceOf(ContentBlock),
  contentState: PropTypes.instanceOf(ContentState),
  functionName: PropTypes.string,
  parentFunctionName: PropTypes.string,
  type: PropTypes.instanceOf(SapType),
  rangeType: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.number)])),
  invocation: PropTypes.instanceOf(Invocation),
};

NumberParameterSliderDecorator.defaultProps = {
  contentBlock: undefined,
  contentState: undefined,
  functionName: undefined,
  parentFunctionName: undefined,
  type: undefined,
  rangeType: [],
  invocation: undefined,
};

export default NumberParameterSliderDecorator;

const gatherFloatParameters = (expressionNode, invocation, tokens, index, parentFunctionName) => {
  // Parse the token as float. If it's a float (and not an operator, bool, etc.) add it to the list of float parameters.
  if (isNumber(expressionNode.token.text)) {
    tokens.push({
      token: expressionNode.token,
      functionName: invocation.definitionToken.text,
      parentFunctionName,
      type: invocation.argumentTypes[index],
      rangeType: invocation.argumentRangeTypes[index],
      invocation,
    });
  }

  // Handle the children (for operators).
  expressionNode.children.forEach((child) =>
    gatherFloatParameters(child, invocation, tokens, index, parentFunctionName)
  );
};

export const makeNumberParameterSliderDecoratorStrategy = (getAst, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  if (window.location.pathname.includes('editing-task')) {
    const ast = getAst();

    // Map definition names to definitions.
    const definitions = {};
    ast.definitions.forEach((definition) => {
      definitions[definition.declaration.nameToken.text] = definition;
    });

    // Gather float parameters.
    const floatParameters = [];
    ast.definitions.forEach((definition) => {
      if (!definition.isFromPrefix) {
        definition.invocations.forEach((invocation) => {
          invocation.argumentExpressions.forEach((argumentExpression, index) => {
            gatherFloatParameters(
              argumentExpression,
              invocation,
              floatParameters,
              index,
              definition.declaration.nameToken.text
            );
          });
        });
      }
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      floatParameters.map((floatParameter) => floatParameter.token),
      floatParameters.map((floatParameter) => ({
        contentBlock,
        contentState,
        ...floatParameter,
        definitions,
      }))
    );
  }
};
