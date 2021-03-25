/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa 7: Converte nota de 0 a 100

function notaAF(percent) {
  let resultado = '';
  if (percent >= 90) {
    resultado = 'A';
  } else if (percent >= 80) {
    resultado = 'B';
  } else if (percent >= 70) {
    resultado = 'C';
  } else if (percent >= 60) {
    resultado = 'D';
  } else if (percent >= 50) {
    resultado = 'E';
  } else if (percent < 50 && percent >= 0) {
    resultado = 'F';
  } else if (percent < 0 || percent > 100) {
    resultado = 'Nota Inválida';
  }
  console.log(`A nota convertida é: ${resultado}`);
  return resultado;
}
notaAF(49);
notaAF(86);
