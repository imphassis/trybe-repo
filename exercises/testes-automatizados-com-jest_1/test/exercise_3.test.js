const myRemoveWithoutCopy = require('../src/oldExercises/exercise_3');

describe('Check if the function myRemoveWithoutCopy Works ', () => {
  it('Check if myRemoveWithoutCopy([1,2,3,4] return the expected array', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toBe(array);
  });
  it('Check if myRemoveWithoutCopy([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toBe([1, 2, 3, 4]);
  });
  it('Check if myRemoveWithoutCopy suffered any changes', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });
  it('Check if myRemoveWithoutCopy([1, 2, 3, 4], 5) return the expected', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
  });
});
