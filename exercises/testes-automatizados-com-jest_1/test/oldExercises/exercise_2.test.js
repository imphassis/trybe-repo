const myRemove = require('../../src/oldExercises/exercise_2');

describe('Check if the Function myRemove works', () => {
  it('Check if myRemove([1, 2, 3, 4], 3) will return the expected ', () =>
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]));
  it('Check if myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4] ', () =>
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
  it('Running myRemove(array, 3) check if the array did not suffer any changes', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toBe([1, 2, 4]);
  });
  it('Check if myRemove([1, 2, 3, 4], 5) returns the expected ', () =>
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
});
