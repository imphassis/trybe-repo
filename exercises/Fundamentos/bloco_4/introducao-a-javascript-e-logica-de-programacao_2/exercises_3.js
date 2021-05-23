/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
mediaArit = soma / numbers.length;
console.log(mediaArit);
