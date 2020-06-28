import ExpectationError from '../ExpectationError';

export default class Keyword {
  constructor(argumentTypes) {
    this.argumentTypes = argumentTypes;
  }

  parseArguments(keywordArguments) {
    const expectedArgumentCount = this.argumentTypes ? this.argumentTypes.length : 0;
    if (expectedArgumentCount !== keywordArguments.length) {
      throw new ExpectationError(
        `${expectedArgumentCount} arguments`,
        `${keywordArguments.length} arguments`
      );
    }
    this.argumentValues = keywordArguments.map((argument, index) =>
      this.argumentTypes[index].parse(argument)
    );
  }

  static get name() {
    throw new Error('Abstract keyword has no name.');
  }
}
