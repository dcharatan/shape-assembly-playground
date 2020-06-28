import ExpectationError from './ExpectationError';
import Program from './Program';

export default class ProgramParser {
  /**
   * Parses functions into a program.
   * @param {SapFunction[]} functions a series of functions
   * @returns {Program} a program AST
   */
  static parseProgram(functions) {
    let entryFunction;
    const subfunctions = [];
    functions.forEach((fn) => {
      if (entryFunction) {
        // Expect a subroutine function.
        if (fn.parameterTokens.length !== 4) {
          throw new ExpectationError(
            'subroutine function (4 arguments)',
            `function with ${fn.parameterTokens.length} arguments`
          );
        }
        subfunctions.push(fn);
      } else {
        // Expect an entry function (i.e. one with no arguments).
        if (fn.parameterTokens.length) {
          throw new ExpectationError(
            'entry function (no arguments)',
            `function with ${fn.parameterTokens.length} arguments`
          );
        }
        entryFunction = fn;
      }
    });
    return new Program(entryFunction, subfunctions);
  }
}
