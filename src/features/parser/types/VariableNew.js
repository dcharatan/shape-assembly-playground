import ExpectationError from '../ExpectationError';

export default class VariableNew {
  static parse(token) {
    if (!Number.isNaN(parseInt(token.charAt(0), 10))) {
      throw new ExpectationError(
        'legal variable name',
        `illegal variable name ${token}, which starts with a number`
      );
    }
    return token;
  }
}
