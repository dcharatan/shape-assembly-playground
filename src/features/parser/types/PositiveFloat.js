import ExpectationError from '../ExpectationError';

export default class PositiveFloat {
  static parse(token) {
    const asFloat = Number.parseFloat(token);
    if (!Number.isNaN(asFloat) && asFloat > 0) {
      return asFloat;
    }
    throw new ExpectationError('positive number', token);
  }
}
