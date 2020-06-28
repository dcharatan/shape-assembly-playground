import keywords from './keywords/Keywords';
import separators from './Separators';

export default class Token {
  constructor(type, start, end) {
    this.type = type;
    this.start = start;
    this.end = end;
  }

  static isWhitespace(token) {
    return token !== '\n' && token.trim() === '';
  }

  static isKeyword(token) {
    return keywords.has(token);
  }

  static isSeparator(token) {
    return separators.has(token);
  }

  static isWord(token) {
    return !Token.isWhitespace(token) && !Token.isKeyword(token) && !Token.isSeparator(token);
  }
}
