import { KW_DEF } from './keywords/Keywords';
import ExpectationError from './ExpectationError';
import SapFunctionDefinition from './SapFunctionDefinition';

export default class SapFunctionDefinitionParser {
  /**
   * Parses statements into functions.
   * @param {Statement[]} statements a series of statements
   * @returns {SapFunctionDefinition[]} a series of SapFunctionDefinitions
   */
  static parseFunctions(statements) {
    let defStatement;
    let bodyStatements = [];
    const functions = [];

    // Add a function to the list of functions if doing so is valid.
    const pushFunction = () => {
      if (defStatement && bodyStatements.length) {
        functions.push(new SapFunctionDefinition(defStatement, bodyStatements));
        defStatement = undefined;
        bodyStatements = [];
      }
    };

    statements.forEach((statement) => {
      if (statement.tokens[0].text === KW_DEF) {
        // Check contextual validity of def statement.
        if (defStatement && !bodyStatements.length) {
          throw new ExpectationError('function body', 'function definition');
        }

        // Check indentation for def statement.
        if (statement.indentationLevel !== 0) {
          throw new ExpectationError(
            'def to have no indentation',
            `indentation of ${statement.indentationLevel} levels`
          );
        }
        pushFunction();
        defStatement = statement;
      } else {
        // Check contextual validity of function body statement.
        if (!defStatement) {
          throw new ExpectationError('function definition', 'function body');
        }

        // Check indentation for function body statement.
        if (statement.indentationLevel !== 1) {
          throw new ExpectationError(
            'function body to be indented one level',
            `indentation of ${statement.indentationLevel} levels`
          );
        }

        bodyStatements.push(statement);
      }
    });

    // Push the last incomplete function if it exists.
    pushFunction();
    if (!functions.length) {
      throw new ExpectationError('at least one function', 'no functions');
    }
    return functions;
  }
}