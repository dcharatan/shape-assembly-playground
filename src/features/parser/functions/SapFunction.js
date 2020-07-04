import ExpectationError from '../ExpectationError';

export default class SapFunction {
  constructor(name, argumentTypes, returnType) {
    this.name = name;
    this.argumentTypes = argumentTypes;
    this.returnType = returnType;
  }

  validateArguments(args, existingVariables) {
    if (args.length !== this.argumentTypes.length) {
      throw new ExpectationError(
        `${this.argumentTypes.length} arguments`,
        `${args.length} arguments`
      );
    }
  }
}
