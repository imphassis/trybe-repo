const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = () => (allIn = arrays.reduce((acc, curr) => acc.concat(curr)));

console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
