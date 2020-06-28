import ExpectationError from '../ExpectationError';

export default class Float {
  static parse(token) {
    const asFloat = Number.parseFloat(token);
    if (!Number.isNaN(asFloat)) {
      return asFloat;
    }
    throw new ExpectationError('number', token);
  }
}
