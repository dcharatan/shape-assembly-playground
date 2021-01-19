import getHiddenParameterCount from '../../editing-task/getHiddenParameterCount';

const HiddenDecorator = () => null;

export default HiddenDecorator;

export const makeHiddenDecoratorStrategy = (getAst, applyStrategy) => (contentBlock, callback, contentState) => {
  const ast = getAst();
  if (ast) {
    const highlights = [];
    ast.definitions.forEach((definition) => {
      if (!definition.isFromPrefix) {
        definition.invocations.forEach((invocation) => {
          const hiddenParameterCount = getHiddenParameterCount(invocation, ast.definitions);
          const { start } = invocation.argumentExpressions[0].token;
          const end = invocation.argumentExpressions[hiddenParameterCount].token.start;
          highlights.push({ start, end });
        });
      }
    });
    applyStrategy(contentBlock, callback, contentState, highlights, []);
  }
};
