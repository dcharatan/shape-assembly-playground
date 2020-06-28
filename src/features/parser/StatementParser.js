import ExpectationError from './ExpectationError';
import Statement from './Statement';

const SPACES_PER_INDENTATION_LEVEL = 4;

export default class StatementParser {
  /**
   * Convert tokens (which include newlines and whitespace) to statements.
   * @param {Token[]} tokens a series of tokens
   * @returns {Statement[]} a series of statements
   */
  static parseStatements(tokens) {
    const statements = [];
    let lineTokens = [];
    let indentation;
    tokens.forEach((token) => {
      if (token.isWhitespace()) {
        indentation = indentation || StatementParser.handleWhitespace(token.text, indentation);
      } else if (token.isNewline()) {
        if (lineTokens.length) {
          statements.push(new Statement(indentation, lineTokens));
          lineTokens = [];
          indentation = undefined;
        }
      } else {
        lineTokens.push(token);
        indentation = indentation || 0;
      }
    });
    return statements;
  }

  /**
   * Ignore whitespace or deduce indentation level, depending on context.
   * @param {string} whitespaceTokenText the whitespace token's text
   * @param {number} indentation the current indentation level
   */
  static handleWhitespace(whitespaceTokenText, indentation) {
    // Ignore whitespace after the beginning of a line.
    if (indentation !== undefined) {
      return undefined;
    }

    // Deduce indentation level for whitespace at the beginning of a line.
    if (whitespaceTokenText.includes('\t')) {
      throw new ExpectationError('spaces', 'tabs');
    }
    if (whitespaceTokenText.length % SPACES_PER_INDENTATION_LEVEL) {
      throw new ExpectationError(
        `number of spaces divisible by ${SPACES_PER_INDENTATION_LEVEL}`,
        `${whitespaceTokenText.length} spaces`
      );
    }
    return whitespaceTokenText.length / SPACES_PER_INDENTATION_LEVEL;
  }
}
