import assert from 'assert';
// escreva a função sumAllNumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;

const sumAllNumbers = (array) => {
  let arrayCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    arrayCount += array[i];
  }
  return arrayCount;
};

const output = sumAllNumbers(numbers);
assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
