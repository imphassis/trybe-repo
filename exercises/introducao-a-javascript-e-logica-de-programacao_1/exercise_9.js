/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa 9: Impar
function par3(a, b, c) {
  let resultado = '';
  if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
    resultado = 'true';
  } else {
    resultado = 'false';
  }
  console.log(resultado);
  return resultado;
}
par3(1, 4, 6);
par3(1, 3, 5);
