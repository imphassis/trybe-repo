import assert from 'assert';
import lodash from 'lodash';
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];

const addOne = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i] + 1);
  }
  return newArray;
};
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
