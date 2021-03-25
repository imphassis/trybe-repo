/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa 8: 3 par
function par3(a, b, c) {
  let resultado = '';
  if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    resultado = 'true';
  } else {
    resultado = 'false';
  }
  console.log(resultado);
  return resultado;
}
par3(2, 4, 6);
par3(1, 3, 6);
