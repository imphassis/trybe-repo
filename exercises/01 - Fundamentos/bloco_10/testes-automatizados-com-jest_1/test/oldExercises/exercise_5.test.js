const [obj1, obj2, obj3] = require('../../src/oldExercises/exercise_5');

describe('Check if objects are identical', () => {
  it('Check if Obj1 and Obj2 are identical (in values)', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Check if Obj1 and Obj3 are not identical (in values)', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
