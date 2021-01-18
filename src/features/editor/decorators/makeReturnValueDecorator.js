const makeReturnValueDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = [];
    ast.definitions.forEach((definition) => {
      if (definition.returnStatement) {
        definition.returnStatement.tokens.forEach((token) => {
          highlights.push({ token });
        });
      }
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

export default makeReturnValueDecoratorStrategy;
