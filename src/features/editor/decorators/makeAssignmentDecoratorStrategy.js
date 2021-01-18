const makeAssignmentDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
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

export default makeAssignmentDecoratorStrategy;
