import Keyword from './Keyword';
import Variable from '../types/VariableExisting';
import UnitFloat from '../types/UnitFloat';

export default class KeywordAttach extends Keyword {
  constructor() {
    super([Variable, Variable, UnitFloat, UnitFloat, UnitFloat, UnitFloat, UnitFloat, UnitFloat]);
  }

  static get name() {
    return 'attach';
  }
}
