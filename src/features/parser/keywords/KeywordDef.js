import Keyword from './Keyword';
import PositiveFloat from '../types/PositiveFloat';
import BooleanType from '../types/BooleanType';
import ExpectationError from '../ExpectationError';

export default class KeywordDef extends Keyword {
  constructor() {
    super([PositiveFloat, PositiveFloat, PositiveFloat, BooleanType]);
  }

  parseArguments(keywordArguments) {
    if (keywordArguments.length === 4) {
      super.parseArguments(keywordArguments);
    } else if (keywordArguments.length) {
      throw new ExpectationError(
        '0 arguments or 4 arguments',
        `${keywordArguments.length} arguments`
      );
    }
    this.keywordArguments = [1, 1, 1, true];
  }

  static get name() {
    return 'def';
  }
}
