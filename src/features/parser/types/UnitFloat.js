import ExpectationError from '../ExpectationError';

export default class UnitFloat {
  static parse(token) {
    const asFloat = Number.parseFloat(token);
    if (!Number.isNaN(asFloat) && asFloat >= 0 && asFloat <= 1) {
      return asFloat;
    }
    throw new ExpectationError('number in range [0, 1]', token);
  }
}
