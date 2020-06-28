export const separators = new Set([',', '(', ')', '=', ':', '\n']);
export const keywords = new Set(['Cuboid', 'attach', 'squeeze', 'reflect', 'translate']);

export default class ShapeAssemblyParser {
  constructor() {
    this.variables = {};
    this.keywords = {
      Cuboid: {},
      attach: {},
      squeeze: {},
      reflect: {},
      translate: {},
    };
  }

  static isSeparator(character) {
    return separators.has(character);
  }

  // Newlines are considered separators, not whitespace.
  static isWhitespace(character) {
    return character === ' ' || character === '\t';
  }

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
        tokens.push(text.slice(start, end));
      }
    };

    let tokenStart = 0;
    let charWasWhitespace = this.isWhitespace(text.charAt(0));
    for (let i = 0; i < text.length; i += 1) {
      const char = text.charAt(i);
      const charIsWhitespace = this.isWhitespace(char);

      // Moving between whitespace and non-whitespace creates a new token.
      if (charWasWhitespace !== charIsWhitespace) {
        pushWord(tokenStart, i);
        tokenStart = i;
      }

      // Individual separator characters are tokens.
      if (this.isSeparator(char)) {
        pushWord(tokenStart, i);
        tokens.push(text.charAt(i));
        tokenStart = i + 1;
      }

      charWasWhitespace = charIsWhitespace;
    }

    // Add the last token.
    pushWord(tokenStart, text.length);
    return tokens;
  }

  parseText(text) {
    this.variables = {};

    const withinComment = false;
    const indented = false;
  }
}
