const myFizzBuzz = require('../../src/oldExercises/exercise_4');

describe('Check if the myFizzBuzz function works properly ', () => {
  it('Check if myFizzBuzz returns as expected with number 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Check if myFizzBuzz returns as expected with parameter "9"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Check if myFizzBuzz returns as expected with parameter "25"', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  it('Check if myFizzBuzz returns as expected with parameter "test"', () => {
    expect(myFizzBuzz('test')).toBe(false);
  });
});
