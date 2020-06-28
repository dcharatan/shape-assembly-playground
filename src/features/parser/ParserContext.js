import { KW_DEF } from './keywords/Keywords';
import ExpectationError from './ExpectationError';
import KeywordDef from './keywords/KeywordDef';

const State = {
  EXPECTING_DEF: 'EXPECTING_DEF',
  EXPECTING_FUNCTION_LINE_SPACES_OR_DEF: 'EXPECTING_FUNCTION_LINE_SPACES_OR_DEF',
  EXPECTING_DEF_NAME: 'EXPECTING_DEF_NAME',
  EXPECTING_DEF_OPENING_PARENTHESIS: 'EXPECTING_DEF_OPENING_PARENTHESIS',
  EXPECTING_DEF_COLON: 'EXPECTING_DEF_COLON',
  EXPECTING_NEWLINE_AFTER_DEF: 'EXPECTING_NEWLINE_AFTER_DEF',
  EXPECTING_FUNCTION_LINE_SPACES: 'EXPECTING_FUNCTION_LINE_SPACES',
  EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD: 'EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD',
};

export default class ParserContext {
  constructor() {
    this.state = State.EXPECTING_DEF;
  }

  updateState(tokens, tokenIndex, definitionTracker) {
    const token = tokens[tokenIndex];
    let nextState;
    let nextTokenIndex = tokenIndex + 1;
    let newFunction;
    let newCall;
    const reducers = {
      [State.EXPECTING_DEF]: () => {
        if (token.isNewline()) {
          nextState = State.EXPECTING_DEF;
        } else if (token.text === KW_DEF) {
          nextState = State.EXPECTING_DEF_NAME;
        } else {
          throw new ExpectationError('function definition', token);
        }
      },

      [State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF]: () => {
        if (token.text === KW_DEF) {
          nextState = State.EXPECTING_DEF_NAME;
        } else if (token.text === '\n') {
          nextState = State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF;
        } else if (token.text === '    ') {
          nextState = State.EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD;
        } else if (token.isWhitespace()) {
          nextState = State.EXPECTING_FUNCTION_LINE_SPACES_OR_DEF;
        } else {
          throw new ExpectationError(
            'function definition or four spaces before line in function body',
            token
          );
        }
      },

      [State.EXPECTING_DEF_NAME]: () => {
        if (token.isWhitespace()) {
          nextState = State.EXPECTING_DEF_NAME;
        } else if (token.isWord()) {
          nextState = State.EXPECTING_DEF_OPENING_PARENTHESIS;
          definitionTracker.addDefinition(new KeywordDef(token));
        } else {
          throw new ExpectationError('function name', token);
        }
      },

      [State.EXPECTING_DEF_OPENING_PARENTHESIS]: () => {
        if (token.isWhitespace()) {
          nextState = State.EXPECTING_DEF_OPENING_PARENTHESIS;
        } else if (token.text === '(') {
          // Find the closing parenthesis.
          let index = tokenIndex + 1;
          for (; index < tokens.length; index += 1) {
            const aheadToken = tokens[index];
            if (aheadToken.text === ')') {
              break;
            }
          }
          if (index === tokens.length) {
            throw new ExpectationError('closing parenthesis', 'none before end of script');
          }
          nextState = State.EXPECTING_DEF_COLON;
          nextTokenIndex = index + 1;
        } else {
          throw new ExpectationError('opening parenthesis for function arguments', token);
        }
      },

      [State.EXPECTING_DEF_COLON]: () => {
        if (token.isWhitespace()) {
          nextState = State.EXPECTING_DEF_COLON;
        } else if (token.text === ':') {
          nextState = State.EXPECTING_NEWLINE_AFTER_DEF;
        } else {
          throw new ExpectationError('colon', token);
        }
      },

      [State.EXPECTING_NEWLINE_AFTER_DEF]: () => {
        if (token.isWhitespace()) {
          nextState = State.EXPECTING_NEWLINE_AFTER_DEF;
        } else if (token.text === '\n') {
          nextState = State.EXPECTING_FUNCTION_LINE_SPACES;
        } else {
          throw new ExpectationError('newline after def', token);
        }
      },

      [State.EXPECTING_FUNCTION_LINE_SPACES]: () => {
        if (token.text === '    ') {
          nextState = State.EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD;
        } else {
          throw new ExpectationError('four spaces before line in function body', token);
        }
      },

      [State.EXPECTING_VARIABLE_NAME_OR_NON_DEF_KEYWORD]: () => {
        if (token.isKeyword(token) && token !== KW_DEF) {
        }
      },
    };

    const fn = reducers[this.state];
    if (!fn) {
      throw new Error(`Unknown state (${this.state}).`);
    }
    fn();
    this.state = nextState;
    return {
      nextState,
      nextTokenIndex,
      newFunction,
      newCall,
    };
  }
}
