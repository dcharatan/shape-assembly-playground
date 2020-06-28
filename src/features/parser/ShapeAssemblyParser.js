import Tokenizer from './Tokenizer';
import StatementParser from './StatementParser';
import SapFunctionParser from './SapFunctionParser';
import ProgramParser from './ProgramParser';

export default class ShapeAssemblyParser {
  static parseText(text) {
    const tokens = Tokenizer.tokenize(text);
    const statements = StatementParser.parseStatements(tokens);
    const functions = SapFunctionParser.parseFunctions(statements);
    return ProgramParser.parseProgram(functions);
  }
}
