const mod = require('../src/exercise_4');

// jest.mock('../src/exercise_4');

describe('Refactoring the first function to >', () => {
  it('return a lowerCase string', () => {
    const toLower = jest
      .spyOn(mod, 'upperString')
      .mockImplementation((string) => string.toLowerCase());

    expect(toLower('XAST')).toBe('xast');
    expect(toLower).toHaveBeenCalledTimes(1);
    expect(toLower).toHaveBeenCalled();

    mod.upperString.mockRestore();
    expect(mod.upperString('sablosp')).toBe('SABLOSP');
  });
});
