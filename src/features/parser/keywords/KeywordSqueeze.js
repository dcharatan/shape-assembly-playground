import Keyword from './Keyword';
import VariableExisting from '../types/VariableExisting';
import Side from '../types/Side';
import UnitFloat from '../types/UnitFloat';

export default class KeywordSqueeze extends Keyword {
  constructor() {
    super([VariableExisting, VariableExisting, VariableExisting, Side, UnitFloat, UnitFloat]);
  }

  static get name() {
    return 'squeeze';
  }
}
