import Keyword from './Keyword';
import PositiveFloat from '../types/PositiveFloat';
import BooleanType from '../types/BooleanType';

export default class KeywordCuboid extends Keyword {
  constructor() {
    super([PositiveFloat, PositiveFloat, PositiveFloat, BooleanType]);
  }

  static get name() {
    return 'Cuboid';
  }
}
