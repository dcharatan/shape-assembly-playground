import Keyword from './Keyword';
import ExpectationError from '../ExpectationError';
import VariableNew from '../types/VariableNew';

export default class KeywordDef extends Keyword {
  constructor(functionName) {
    super([VariableNew, VariableNew, VariableNew, VariableNew]);
    this.functionName = functionName;
  }

  parseArguments(keywordArguments) {
    if (keywordArguments.length === 4) {
      super.parseArguments(keywordArguments);
    } else if (keywordArguments.length) {
      throw new ExpectationError(
        '0 parameters or 4 parameters',
        `${keywordArguments.length} parameters`
      );
    }
    this.keywordArguments = [1, 1, 1, true];
  }

  static get name() {
    return 'def';
  }
}
