import DefinitionTracker from './DefinitionTracker';
import ParserContext from './ParserContext';

export default class ShapeAssemblyParser {
  constructor() {
    this.definitionTracker = new DefinitionTracker();
    this.parserContext = new ParserContext();
  }

  parseText(text) {
    const tokens = ShapeAssemblyParser.tokenize(text);
    let tokenIndex = 0;
    while (tokenIndex < tokens.length) {
      const result = this.parserContext.updateState(tokens, tokenIndex, this.definitionTracker);
      tokenIndex = result.nextTokenIndex;
    }

    tokens.forEach((_, index) => {
      this.parserContext.updateState(tokens, index, this.definitionTracker);
    });
  }
}
