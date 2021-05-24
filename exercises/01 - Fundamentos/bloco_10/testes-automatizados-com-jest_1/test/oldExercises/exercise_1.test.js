const sum = require('../../src/oldExercises/exercise_1');

describe('Check function Sum', () => {
  it('Check if sum(4,5) will return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Check if sum(0,0) is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Check if sum(4,"5") throw error', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('Check if sum(4,"5") throw "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
