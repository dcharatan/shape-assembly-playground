import { KW_DEF } from './keywords/Keywords';
import ExpectationError from './ExpectationError';

export default class SapFunctionDefinition {
  constructor(defStatement, bodyStatements) {
    this.defStatement = defStatement;
    this.bodyStatements = bodyStatements;
    this.parameterTokens = [];
    this.functionNameToken = undefined;
    this.assignedVariableTokens = [];
    this.parseDefStatement();
    this.bodyStatements.forEach((statement) => this.parseBodyStatement(statement));
  }

  parseBodyStatement(statement) {
    const equalsIndex = statement.tokens.findIndex((t) => t.text === '=');

    // Validate index of equals sign.
    if (equalsIndex !== -1 && equalsIndex !== 1) {
      throw new ExpectationError('equals sign at index 1', `equals sign at index ${equalsIndex}`);
    }

    const result = SapFunctionDefinition.parseFunctionCall(statement.tokens.slice(equalsIndex + 1));

    // Parse assignment.
    if (equalsIndex === 1) {
      if (statement.tokens.length < 3 || !statement.tokens[2].isWord()) {
        throw new ExpectationError('function name', statement.tokens[2] || 'too few tokens');
      }
      this.assignedVariableTokens.push(statement.tokens[0]);
    }
  }

  static parseFunctionCall(tokens) {
    if (tokens.length < 3) {
      throw new ExpectationError('function call', 'too few tokens');
    }
    if (!tokens[0].isWord()) {
      throw new ExpectationError('function name', tokens[0]);
    }

    // Validate the parentheses.
    const openingParenthesisIndex = tokens.findIndex((t) => t.text === '(');
    const closingParenthesisIndex = tokens.findIndex((t) => t.text === ')');
    if (openingParenthesisIndex !== 1) {
      throw new ExpectationError('opening parenthesis', tokens[1]);
    }
    if (closingParenthesisIndex !== tokens.length - 1) {
      throw new ExpectationError(
        'closing parenthesis at end of statement',
        tokens[tokens.length - 1]
      );
    }

    // Gather and validate the arguments.
    const argumentTokens = [];
    const betweenParentheses = tokens.slice(openingParenthesisIndex + 1, closingParenthesisIndex);
    let expectingComma = false;
    betweenParentheses.forEach((token) => {
      if (expectingComma) {
        if (token.text !== ',') {
          throw new ExpectationError('comma', token);
        }
      } else {
        if (!token.isWord()) {
          throw new ExpectationError('argument name', token);
        }
        argumentTokens.push(token);
      }
      expectingComma = !expectingComma;
    });
    if (!expectingComma && argumentTokens.length) {
      throw new ExpectationError('argument name', 'closing parenthesis');
    }
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

      [Expectations.END]: (token) => {
        throw new ExpectationError('newline', token);
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
