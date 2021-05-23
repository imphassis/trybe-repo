/* eslint-disable prefer-const */
let number = 5;
let resultado = '';
for (let i = 0; i <= number; i += 1) {
  resultado = ' '.repeat(number - i);
  resultado += '*'.repeat(i);
  console.log(resultado);
}
