import assert from 'assert';
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = (array) => {
  let a = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      a += 1;
    }
    newArray.push(a);
    a = 0;
  }
  return newArray;
};

const output = wordLengths(words);
assert.strictEqual(typeof wordLengths, 'function');
assert.deepStrictEqual(output, expected);
