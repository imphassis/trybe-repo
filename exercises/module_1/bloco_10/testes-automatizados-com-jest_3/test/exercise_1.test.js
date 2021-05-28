const math = require('../src/exercise_1');

describe('Testing random100 function using mock', () => {
  // Exercício 1
  it('with ReturnValue10', () => {
    math.random100 = jest.fn().mockReturnValue(10);
    math.random100();
    expect(math.random100).toHaveBeenCalled();
    expect(math.random100()).toBe(10);
    expect(math.random100).toHaveBeenCalledTimes(2);
  });
  it('now changing this function so it can divide the numbers', () => {
    // Exercício 2
    math.random100 = jest.fn().mockImplementation((a, b) => a / b);
    math.random100(10, 2);
    expect(math.random100).toHaveBeenCalled();
    expect(math.random100(10, 2)).toBe(5);
    expect(math.random100).toHaveBeenCalledTimes(2);
  });
  it('now changing this function so it can multiply the numbers', () => {
    // Exercício 3
    math.random100 = jest.fn().mockImplementation((a, b, c) => a * b * c);
    math.random100(10, 2, 3);
    expect(math.random100).toHaveBeenCalled();
    expect(math.random100(10, 2, 3)).toBe(60);
    expect(math.random100).toHaveBeenCalledTimes(2);
    // Reseting mocking values
    math.random100.mockReset();
    expect(math.random100()).toBe(undefined);
    // Setting a new value to mocking
    math.random100 = jest.fn().mockImplementation((a) => a * 2);
    math.random100(10);
    expect(math.random100(10)).toBe(20);
    expect(math.random100).toHaveBeenCalled();
    expect(math.random100).toHaveBeenCalledTimes(2);
  });
});
