import Keyword from './Keyword';
import Variable from '../types/VariableExisting';
import Side from '../types/Side';
import UnitFloat from '../types/UnitFloat';

export default class KeywordSqueeze extends Keyword {
  constructor() {
    super([Variable, Variable, Variable, Side, UnitFloat, UnitFloat]);
  }

  static get name() {
    return 'squeeze';
  }
}
