/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// 4. Programa que retorna positivo ou negativo:
function positiveOrNegative(x) {
  let resultado = '';
  if (x > 0) {
    resultado = 'O número é positivo.';
  } else if (x === 0) {
    resultado = 'O número é zero.';
  } else {
    resultado = 'O numero é negativo.';
  }
  console.log(resultado);
  return resultado;
}
positiveOrNegative(2);
positiveOrNegative(-3);
