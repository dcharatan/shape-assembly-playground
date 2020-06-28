import ExpectationError from '../ExpectationError';

export default class BooleanType {
  static parse(token) {
    if (token === 'True') {
      return true;
    }
    if (token === 'False') {
      return false;
    }
    throw new ExpectationError(`(True | False)`, token);
  }
}
