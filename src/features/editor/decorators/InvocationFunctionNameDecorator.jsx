import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Invocation from '@dcharatan/shape-assembly-parser/dist/invocation/Invocation';
import { setTranspiledLinesHovered, setTranspiledLinesNotHovered } from '../editorSlice';
import NonSerializableContext from '../../context/NonSerializableContext';
import HighlightDecorator from './HighlightDecorator';

const InvocationFunctionNameDecorator = ({ children, invocation }) => {
  const functionName = invocation.definitionToken.text;
  const { metadata } = useContext(NonSerializableContext);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  // Define some helper functions.
  const tokenToKey = (token) => `${token.start}/${token.end}`;
  const getArgumentToken = (index) => invocation.argumentExpressions[index].token;

  const onHover = (newHoveredValue) => {
    const selection = {};

    // For reflect and translate, highlight the target and cloned (reflected/translated) cuboids.
    if (functionName === 'reflect' || functionName === 'translate') {
      const targetToken = getArgumentToken(0);

      // Get the clones' transpiled line indices.
      const line = metadata.tokenLineMap.get(tokenToKey(invocation.definitionToken));
      const cloneTranspiledLineIndices = metadata.invocationLineMap.get(line);

      // Get the originals' transpiled line indices.
      const cuboidDeclarationToken = metadata.cuboidUsageMap.get(tokenToKey(targetToken));
      if (cuboidDeclarationToken === undefined) {
        return;
      }
      const cuboidLine = metadata.tokenLineMap.get(tokenToKey(cuboidDeclarationToken));
      if (cuboidLine === undefined) {
        return;
      }
      const originalTranspiledLineIndices = metadata.invocationLineMap.get(cuboidLine);

      // Mark them as selected.
      originalTranspiledLineIndices.forEach((index) => {
        selection[index] = 'primary';
      });
      cloneTranspiledLineIndices.forEach((index) => {
        selection[index] = 'secondary';
      });
    }

    // For attach, highlight the two involved cuboids.
    else if (functionName === 'attach' || functionName === 'squeeze') {
      const primary = [getArgumentToken(0)];
      const secondary = [getArgumentToken(1)];
      if (functionName === 'squeeze') {
        secondary.push(getArgumentToken(2));
      }

      const addToSelection = (argumentTokens, type) => {
        argumentTokens.forEach((argumentToken) => {
          const cuboidDeclarationToken = metadata.cuboidUsageMap.get(tokenToKey(argumentToken));
          if (cuboidDeclarationToken === undefined) {
            return;
          }
          const cuboidLine = metadata.tokenLineMap.get(tokenToKey(cuboidDeclarationToken));
          if (cuboidLine === undefined) {
            return;
          }
          const originalTranspiledLineIndices = metadata.invocationLineMap.get(cuboidLine);
          originalTranspiledLineIndices.forEach((index) => {
            selection[index] = type;
          });
        });
      };
      addToSelection(primary, 'primary');
      addToSelection(secondary, 'secondary');
    }

    // For cuboid, highlight the cuboid.
    else if (functionName === 'Cuboid') {
      const targetToken = getArgumentToken(0);

      // Mark them as selected.
      metadata.tokenToDirectLines.get(tokenToKey(targetToken)).forEach((index) => {
        selection[index] = 'primary';
      });
    }

    // For custom functions, highlight everything.
    else {
      const targetToken = getArgumentToken(0);

      // Mark them as selected.
      metadata.tokenToDescendantLines.get(tokenToKey(targetToken)).forEach((index) => {
        selection[index] = 'primary';
      });
    }

    setHovered(newHoveredValue);
    if (newHoveredValue) {
      dispatch(setTranspiledLinesHovered(selection));
    } else {
      dispatch(setTranspiledLinesNotHovered(Object.keys(selection)));
    }
  };

  const color = '#6c757d';
  return (
    <HighlightDecorator highlightColor={color} highlighted={hovered} color={color} onHover={onHover}>
      {children}
    </HighlightDecorator>
  );
};

InvocationFunctionNameDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  invocation: PropTypes.instanceOf(Invocation).isRequired,
};

export default InvocationFunctionNameDecorator;

export const makeInvocationFunctionNameDecorator = (getAst, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = [];
    const invocations = [];
    ast.definitions.forEach((definition) => {
      highlights.push(...definition.invocations.map((invocation) => invocation.definitionToken));
      invocations.push(...definition.invocations.map((invocation) => ({ invocation })));
    });
    applyStrategy(contentBlock, callback, contentState, highlights, invocations);
  }
};
