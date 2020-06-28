export default class ExpectationError extends Error {
  constructor(expectation, reality) {
    super(`Expected ${expectation} but received ${reality}.`);
    this.name = 'ExpectationError';
  }
}
