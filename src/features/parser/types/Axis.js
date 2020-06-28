import ExpectationError from '../ExpectationError';

export const AxisEnum = {
  X: 'X',
  Y: 'Y',
  Z: 'Z',
};

export default class Axis {
  static parse(token) {
    const axis = AxisEnum[token];
    if (axis) {
      return axis;
    }
    throw new ExpectationError(`(${Object.values(AxisEnum).join(' | ')})`, token);
  }
}
