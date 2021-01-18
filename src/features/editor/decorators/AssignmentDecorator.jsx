import React from 'react';
import PropTypes from 'prop-types';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';
import { tokenPropType } from '../tokenUtilities';

const AssignmentDecorator = ({ children, token }) => (
  <HoverableCuboidDecorator token={token}>{children}</HoverableCuboidDecorator>
);

AssignmentDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  token: tokenPropType.isRequired,
};

export default AssignmentDecorator;

export const makeAssignmentDecoratorStrategy = (getAst, metadata, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = [];
    ast.definitions.forEach((definition) => {
      definition.invocations.forEach((invocation) => {
        invocation.assignmentTokens.forEach((assignmentToken) => {
          highlights.push({ token: assignmentToken });
        });
      });
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights.map((h) => h.token),
      highlights
    );
  }
};
