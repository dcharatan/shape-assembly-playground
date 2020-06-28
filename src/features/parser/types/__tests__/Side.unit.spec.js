import Side, { SideEnum } from '../Side';

describe('Side Unit Tests', () => {
  describe('parse', () => {
    test('left is side', () => {
      expect(Side.parse('left')).toBe(SideEnum.LEFT);
    });

    test('right is side', () => {
      expect(Side.parse('right')).toBe(SideEnum.RIGHT);
    });

    test('bot is side', () => {
      expect(Side.parse('bot')).toBe(SideEnum.BOT);
    });

    test('top is side', () => {
      expect(Side.parse('top')).toBe(SideEnum.TOP);
    });

    test('front is side', () => {
      expect(Side.parse('front')).toBe(SideEnum.FRONT);
    });

    test('back is side', () => {
      expect(Side.parse('back')).toBe(SideEnum.BACK);
    });

    test('LEFT is not a side', () => {
      expect(() => Side.parse('LEFT')).toThrow();
    });

    test('text axis is not a side', () => {
      expect(() => Side.parse('cauliflower')).toThrow();
    });

    test('number is not a side', () => {
      expect(() => Side.parse(2)).toThrow();
    });
  });
});
