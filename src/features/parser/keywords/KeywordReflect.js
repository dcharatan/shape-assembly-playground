import Keyword from './Keyword';
import Variable from '../types/VariableExisting';
import Axis from '../types/Axis';

export default class KeywordReflect extends Keyword {
  constructor() {
    super([Variable, Axis]);
  }

  static get name() {
    return 'reflect';
  }
}
