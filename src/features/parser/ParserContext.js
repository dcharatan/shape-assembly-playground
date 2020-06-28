import { KW_DEF } from './keywords/Keywords';
import Token from './Token';
import ExpectationError from './ExpectationError';

const State = {
  EXPECTING_DEF: 'EXPECTING_DEF',
  EXPECTING_FUNCTION_LINE_SPACES_OR_DEF: 'EXPECTING_FUNCTION_LINE_SPACES_OR_DEF',
  EXPECTING_DEF_NAME: 'EXPECTING_DEF_NAME',
  EXPECTING_DEF_OPENING_PARENTHESIS: 'EXPECTING_DEF_OPENING_PARENTHESIS',
  EXPECTING_DEF_ARGUMENTS: 'EXPECTING_DEF_ARGUMENTS',
  EXPECTING_DEF_COMMA_OR_CLOSING_PARENTHESIS: 'EXPECTING_DEF_COMMA_OR_CLOSING_PARENTHESIS',
  EXPECTING_DEF_COLON: 'EXPECTING_DEF_COLON',
  EXPECTING_DEF_ARGUMENT_NAME: 'EXPECTING_DEF_ARGUMENT_NAME',
  EXPECTING_NEWLINE_AFTER_DEF: 'EXPECTING_NEWLINE_AFTER_DEF',
  EXPECTING_FUNCTION_LINE_SPACES: 'EXPECTING_FUNCTION_LINE_SPACES',
  EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD: 'EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD',
};

export default class ParserContext {
  constructor() {
    this.state = State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF;
  }

  updateState(tokens, tokenIndex) {
    const token = tokens[tokenIndex];
    let nextState;
    const nextTokenIndex = tokenIndex + 1;
    let newFunction;
    let newCall;
    const reducers = {
      [State.EXPECTING_DEF]: () => {
        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_DEF;
        } else if (token === '\n') {
          nextState = State.EXPECTING_DEF;
        } else if (token === KW_DEF) {
          nextState = State.EXPECTING_DEF_NAME;
        } else {
          throw new ExpectationError('function definition', token);
        }
      },

      [State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF]: () => {
        if (token === KW_DEF) {
          nextState = State.EXPECTING_DEF_NAME;
        } else if (token === '\n') {
          nextState = State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF;
        } else if (token === '    ') {
          nextState = State.EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD;
        } else if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF;
        } else {
          throw new ExpectationError(
            'function definition or four spaces before line in function body',
            token
          );
        }
      },

      [State.EXPECTING_DEF_NAME]: () => {
        if (Token.isWhitespace()) {
          nextState = State.EXPECTING_DEF_NAME;
        } else if (Token.isWord()) {
          nextState = State.EXPECTING_DEF_OPENING_PARENTHESIS;
        } else {
          throw new ExpectationError('function name', token);
        }
      },

      [State.EXPECTING_DEF_OPENING_PARENTHESIS]: () => {
        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_DEF_OPENING_PARENTHESIS;
        } else if (token === '(') {
          nextState = State.EXPECTING_DEF_ARGUMENTS;
        } else {
          throw new ExpectationError('opening parenthesis for function arguments', token);
        }
      },

      [State.EXPECTING_DEF_ARGUMENTS]: () => {
        // Find the closing parenthesis.
        let closingParenthesisIndex = tokenIndex + 1;
        for (; closingParenthesisIndex < tokens.length; closingParenthesisIndex += 1) {
          if (tokens[closingParenthesisIndex] === ')') {
            break;
          }
        }
        if (closingParenthesisIndex === tokens.length) {
          throw new ExpectationError('closing parenthesis', 'none');
        }

        // Create a new function and parse its arguments.

        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_DEF_ARGUMENTS;
        } else if (Token.isWord(token)) {
          nextState = State.EXPECTING_DEF_COMMA_OR_CLOSING_PARENTHESIS;
        } else if (token === ')') {
          nextState = State.EXPECTING_DEF_COLON;
        } else {
          throw new ExpectationError('function argument', token);
        }
      },

      [State.EXPECTING_DEF_COMMA_OR_CLOSING_PARENTHESIS]: () => {
        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_DEF_COMMA_OR_CLOSING_PARENTHESIS;
        } else if (token === ',') {
          nextState = State.EXPECTING_DEF_ARGUMENT_NAME;
        } else if (token === ')') {
          nextState = State.EXPECTING_DEF_COLON;
        } else {
          throw new ExpectationError('comma or closing parenthesis', token);
        }
      },

      [State.EXPECTING_DEF_COLON]: () => {
        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_DEF_COLON;
        } else if (token === ':') {
          nextState = State.EXPECTING_NEWLINE_AFTER_DEF;
        } else {
          throw new ExpectationError('colon', token);
        }
      },

      [State.EXPECTING_DEF_ARGUMENT_NAME]: () => {
        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_DEF_ARGUMENT_NAME;
        } else if (Token.isWord(token)) {
          nextState = State.EXPECTING_DEF_COMMA_OR_CLOSING_PARENTHESIS;
        } else {
          throw new ExpectationError('argument name', token);
        }
      },

      [State.EXPECTING_NEWLINE_AFTER_DEF]: () => {
        if (Token.isWhitespace(token)) {
          nextState = State.EXPECTING_NEWLINE_AFTER_DEF;
        } else if (token === '\n') {
          nextState = State.EXPECTING_FUNCTION_LINE_SPACES;
        } else {
          throw new ExpectationError('newline after def', token);
        }
      },

      [State.EXPECTING_FUNCTION_LINE_SPACES]: () => {
        if (token === '    ') {
          nextState = State.EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD;
        } else {
          throw new ExpectationError('four spaces before line in function body', token);
        }
      },

      [State.EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD]: () => {
        if (Token.isKeyword(token) && token !== KW_DEF) {
        }
      },
    };

    const fn = reducers[this.state];
    if (!fn) {
      throw new Error('Unknown state.');
    }
    return {
      nextState,
      nextTokenIndex,
      newFunction,
      newCall,
    };
  }
}
