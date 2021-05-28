const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// prettier-ignore
const grades = [  [9, 8, 10, 7, 5],  [10, 9, 9, 10, 8],  [10, 7, 10, 8, 9],];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = () =>
  (object = students.map((el, i) => {
    return {
      name: el,
      average: grades[i].reduce((acc, curr, index, a) =>
        index + 1 === a.length ? (acc + curr) / a.length : acc + curr
      ),
    };
  }));

console.log(studentAverage());

// assert.deepStrictEqual(studentAverage(), expected);
