// prettier-ignore
const grades = [  [9, 8, 10, 7, 5],  [10, 9, 9, 10, 8],  [10, 7, 10, 8, 9],];

const teste = grades[1].map((el, i, a) => `${el}, ${i + 1}, ${a.length}`);

console.log(teste);
