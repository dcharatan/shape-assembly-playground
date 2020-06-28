import Token from './Token';

export default class Tokenizer {
  /**
   * Tokenize the text. A token can either be a keyword, a separator, a block of whitespace, or a word (e.g. a variable).
   * @param {string} text the text to tokenize
   * @returns {string[]} an array of tokens
   */
  static tokenize(text) {
    if (!text || text.length === 0) {
      return [];
    }
    const tokens = [];

    // Push the previous word.
    const pushWord = (start, end) => {
      if (start !== end) {
        tokens.push(new Token(text.slice(start, end), start, end));
      }
    };

    let tokenStart = 0;
    let charWasWhitespace = Token.isTextWhitespace(text.charAt(0));
    for (let i = 0; i < text.length; i += 1) {
      const char = text.charAt(i);
      const charIsWhitespace = Token.isTextWhitespace(char);

      // Moving between whitespace and non-whitespace creates a new token.
      if (charWasWhitespace !== charIsWhitespace) {
        pushWord(tokenStart, i);
        tokenStart = i;
      }

      // Individual separator characters are tokens.
      if (Token.isTextSeparator(char)) {
        pushWord(tokenStart, i);
        tokens.push(new Token(text.charAt(i), i, i + 1));
        tokenStart = i + 1;
      }

      charWasWhitespace = charIsWhitespace;
    }

    // Add the last token.
    pushWord(tokenStart, text.length);
    return tokens;
  }
}
