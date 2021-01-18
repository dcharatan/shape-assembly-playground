const makeCuboidParameterDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  // Gather cuboid parameters.
  const ast = getAst();
  if (ast) {
    const highlights = [];
    ast.definitions.forEach((definition) => {
      definition.invocations.forEach((invocation) => {
        invocation.argumentExpressions.forEach((e, index) => {
          if (invocation.argumentTypes[index].name === 'block') {
            highlights.push({ token: e.token, index });
          }
        });
      });
    });
    applyStrategy(
      contentBlock,
      callback,
      contentState,
      highlights.map((c) => c.token),
      highlights
    );
  }
};

export default makeCuboidParameterDecoratorStrategy;
