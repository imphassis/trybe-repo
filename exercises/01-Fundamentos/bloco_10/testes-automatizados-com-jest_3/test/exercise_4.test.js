const mod = require('../src/exercise_4');

jest.mock('../src/exercise_4');

describe('Refactoring the first function to >', () => {
  it('return a lowerCase string', () => {
    mod.upperString = jest.fn().mockImplementation((string) => string.toLowerCase());
    mod.upperString('XAST');
    expect(mod.upperString).toHaveBeenCalled();
    expect(mod.upperString).toHaveBeenCalledTimes(1);
    expect(mod.upperString('XAST')).toBe('xast');
  });
});

describe('Refactoring the second function to > ', () => {
  it('return the last character', () => {
    mod.firstChar = jest.fn().mockImplementation((string) => string[string.length - 1]);
    mod.firstChar('XAST');
    expect(mod.firstChar).toHaveBeenCalled();
    expect(mod.firstChar).toHaveBeenCalledTimes(1);
    expect(mod.firstChar('XAST')).toBe('T');
  });
});
describe('Refactoring the third function to > ', () => {
  it('concat three strings instead of just two', () => {
    mod.concatStrings = jest
      .fn()
      .mockImplementation((string1, string2, string3) => string1.concat(string2.concat(string3)));
    mod.concatStrings('XAST', 'FROST', 'LEZTR');
    expect(mod.concatStrings).toHaveBeenCalled();
    expect(mod.concatStrings).toHaveBeenCalledTimes(1);
    expect(mod.concatStrings('XAST', 'FROST', 'LEZTR')).toBe('XASTFROSTLEZTR');
  });
});
