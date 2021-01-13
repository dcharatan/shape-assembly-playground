import React from 'react';
import PropTypes from 'prop-types';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';

const DefParameterDecorator = ({ children, argumentType, transpiledLineIndices }) => {
  if (argumentType.name === 'block') {
    return (
      <HoverableCuboidDecorator transpiledLineIndices={transpiledLineIndices} color="#28a745">
        {children}
      </HoverableCuboidDecorator>
    );
  }
  return <span style={{ color: '#28a745' }}>{children}</span>;
};

DefParameterDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  argumentType: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  transpiledLineIndices: PropTypes.arrayOf(PropTypes.number.isRequired),
};

DefParameterDecorator.defaultProps = {
  transpiledLineIndices: undefined,
};

export default DefParameterDecorator;

export const makeDefParameterDecoratorStrategy = (getAst, metadata, applyStrategy) => (
  contentBlock,
  callback,
  contentState
) => {
  const ast = getAst();
  if (ast) {
    const highlights = ast.definitions
      .filter((definition) => !definition.isBuiltIn)
      .map((definition) => definition.declaration.parameterTokens)
      .reduce((tokens, newTokens) => [...tokens, ...newTokens], []);
    const tokenToKey = (token) => `${token.start}/${token.end}`;
    const props = ast.definitions
      .filter((definition) => !definition.isBuiltIn)
      .map((definition) =>
        definition.argumentTypes.map((argumentType, index) => ({
          argumentType,
          transpiledLineIndices: metadata.tokenToDirectLines.get(
            tokenToKey(definition.declaration.parameterTokens[index])
          ),
        }))
      )
      .reduce((argumentTypes, newArgumentTypes) => [...argumentTypes, ...newArgumentTypes], []);
    applyStrategy(contentBlock, callback, contentState, highlights, props);
  }
};
