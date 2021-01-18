import React from 'react';
import PropTypes from 'prop-types';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';
import { COLOR_SECONDARY } from '../../../colors';

const AssignmentDecorator = ({ children, transpiledLineIndices }) => (
  <HoverableCuboidDecorator transpiledLineIndices={transpiledLineIndices} color={COLOR_SECONDARY}>
    {children}
  </HoverableCuboidDecorator>
);

AssignmentDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  transpiledLineIndices: PropTypes.arrayOf(PropTypes.number.isRequired),
};

AssignmentDecorator.defaultProps = {
  transpiledLineIndices: undefined,
};

export default AssignmentDecorator;

export const makeAssignmentDecoratorStrategy = (getAst, metadata, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.definitions
      .reduce((invocations, definition) => [...invocations, ...definition.invocations], [])
      .map((invocation) => invocation.assignmentTokens)
      .reduce((allTokens, tokens) => [...allTokens, ...tokens], []);

    // Give assignments that produce cuboids their transpiled line indices.
    const tokenToKey = (token) => `${token.start}/${token.end}`;
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights,
      highlights.map((highlight) => ({
        transpiledLineIndices: metadata.get(tokenToKey(highlight)).map((x) => x.line),
      }))
    );
  }
};
