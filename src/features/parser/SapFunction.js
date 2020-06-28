import { KW_DEF } from './keywords/Keywords';
import ExpectationError from './ExpectationError';

export default class SapFunction {
  constructor(defStatement, bodyStatements) {
    this.defStatement = defStatement;
    this.bodyStatements = bodyStatements;
    this.parameterTokens = [];
    this.functionNameToken = undefined;
    this.parseDefStatement();
  }

  parseDefStatement() {
    // Define the state machine used to parse function and parameter names.
    const Expectations = Object.freeze({
      DEF: 'DEF',
      FUNCTION_NAME: 'FUNCTION_NAME',
      OPENING_PARENTHESIS: 'OPENING_PARENTHESIS',
      PARAMETER_NAME_OR_CLOSING_PARENTHESIS: 'PARAMETER_NAME_OR_CLOSING_PARENTHESIS',
      COMMA_OR_CLOSING_PARENTHESIS: 'COMMA_OR_CLOSING_PARENTHESIS',
      PARAMETER_NAME: 'PARAMETER_NAME',
      COLON: 'COLON',
      END: 'END',
    });
    const actions = {
      [Expectations.DEF]: (token) => {
        if (token.text === KW_DEF) {
          return Expectations.FUNCTION_NAME;
        }
        throw new ExpectationError('def', token);
      },

      [Expectations.FUNCTION_NAME]: (token) => {
        if (token.isWord()) {
          this.functionNameToken = token;
          return Expectations.OPENING_PARENTHESIS;
        }
        throw new ExpectationError('function name', token);
      },

      [Expectations.OPENING_PARENTHESIS]: (token) => {
        if (token.text === '(') {
          return Expectations.PARAMETER_NAME_OR_CLOSING_PARENTHESIS;
        }
        throw new ExpectationError('opening parenthesis', token);
      },

      [Expectations.PARAMETER_NAME_OR_CLOSING_PARENTHESIS]: (token) => {
        if (token.text === ')') {
          return Expectations.COLON;
        }
        if (token.isWord()) {
          this.parameterTokens.push(token);
          return Expectations.COMMA_OR_CLOSING_PARENTHESIS;
        }
        throw new ExpectationError('parameter name or closing parenthesis', token);
      },

      [Expectations.COMMA_OR_CLOSING_PARENTHESIS]: (token) => {
        if (token.text === ',') {
          return Expectations.PARAMETER_NAME;
        }
        if (token.text === ')') {
          return Expectations.COLON;
        }
        throw new ExpectationError('comma or closing parenthesis', token);
      },

      [Expectations.PARAMETER_NAME]: (token) => {
        if (token.isWord()) {
          this.parameterTokens.push(token);
          return Expectations.COMMA_OR_CLOSING_PARENTHESIS;
        }
        throw new ExpectationError('parameter name', token);
      },

      [Expectations.COLON]: (token) => {
        if (token.text === ':') {
          return Expectations.END;
        }
        throw new ExpectationError('colon', token);
      },
    };

    // Run the state machine.
    let state = Expectations.DEF;
    const { tokens } = this.defStatement;
    tokens.forEach((token) => {
      state = actions[state](token);
    });
    if (state !== Expectations.END) {
      throw new ExpectationError('end of function definition', tokens[tokens.length - 1]);
    }
  }
}
