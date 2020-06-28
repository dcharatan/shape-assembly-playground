import ExpectationError from '../ExpectationError';

export const SideEnum = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  TOP: 'TOP',
  BOT: 'BOT',
  FRONT: 'FRONT',
  BACK: 'BACK',
};

export default class Side {
  static parse(token) {
    const side = {
      right: SideEnum.RIGHT,
      left: SideEnum.LEFT,
      top: SideEnum.TOP,
      bot: SideEnum.BOT,
      front: SideEnum.FRONT,
      back: SideEnum.BACK,
    }[token];
    if (side) {
      return side;
    }
    throw new ExpectationError(`(${Object.values(SideEnum).join(' | ')})`, token);
  }
}
