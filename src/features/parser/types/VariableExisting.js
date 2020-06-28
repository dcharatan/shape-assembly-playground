import ExpectationError from '../ExpectationError';

export default class VariableExisting {
  static parse(token, variables) {
    if (variables && variables[token]) {
      return variables[token];
    }
    const variableNames = Object.keys(variables);
    const text = variableNames.length === 0 ? 'none found' : variableNames.join(' | ');
    throw new ExpectationError(`previously declared variable (${text})`, token);
  }
}
