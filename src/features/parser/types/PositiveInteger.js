import ExpectationError from '../ExpectationError';

export default class PositiveInteger {
  static parse(token) {
    const asInteger = Number.parseInt(token, 10);
    if (!Number.isNaN(asInteger) && asInteger === Number.parseFloat(token) && asInteger > 0) {
      return asInteger;
    }
    throw new ExpectationError('positive integer', token);
  }
}
