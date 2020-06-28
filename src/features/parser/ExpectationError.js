export default class ExpectationError extends Error {
  constructor(expectation, reality) {
    if (reality.text) {
      super(
        `Expected ${expectation} but received token ${
          reality.text === '\n' ? 'newline' : `"${reality.text}"`
        }.`
      );
    } else {
      super(`Expected ${expectation} but received ${reality}.`);
    }
    this.name = 'ExpectationError';
  }
}
