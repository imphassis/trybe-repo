const uppercase = require('../src/exercises_1');

describe('Test if the function upperCase works', () => {
  it('Testing if the string "teste" will be returning in uppercase', (done) => {
    uppercase('teste', (callback) => {
      expect(callback).toBe('TESTE');
      done();
    });
  });
});
