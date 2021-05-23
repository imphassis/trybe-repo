import assert from 'assert';

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);

// implemente seus testes aqui
assert.deepStrictEqual(expected, [1, 2, 4], 'Expected [1, 2, 4]');
// assert.notDeepStrictEqual(expected, [1, 2, 4], 'Expected [ 1, 2, 3, 4');
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 5));
