/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa 9: Impar
function salarioFinal(salario) {
  let INSS = '';
  let resultado = '';
  if (salario <= 1556.94) {
    INSS = salario * 0.08;
  } else if (salario > 1556.95 && salario <= 2594.92) {
    INSS = salario * 0.09;
  } else if (salario > 2594.93 && salario <= 5189.82) {
    INSS = salario * 0.11;
  } else if (salario > 5189.82) {
    INSS -= 570.88;
  }
  // Calculo do Imposto de Renda
  let IR = '';
  let salarioReduzidoINSS = salario - INSS;
  if (salario - INSS <= 1903.98) {
    IR = 0;
  } else if (salarioReduzidoINSS > 1903.98 && salarioReduzidoINSS <= 2826.65) {
    IR = salarioReduzidoINSS * 0.075 - 142.8;
  } else if (salarioReduzidoINSS > 2826.65 && salarioReduzidoINSS <= 3751.05) {
    IR = salarioReduzidoINSS * 0.15 - 354.8;
  } else if (salarioReduzidoINSS > 3751.05 && salarioReduzidoINSS <= 4664.68) {
    IR = salarioReduzidoINSS * 0.225 - 636.16;
  } else if (salarioReduzidoINSS > 4664.68) {
    IR = salarioReduzidoINSS * 0.275 - 869.36;
  }
  // Calculo do Salario Total:
  resultado = salarioReduzidoINSS - IR;
  console.log(`o Salário com a redução do IR e do INSS é de ${resultado}`);
  return resultado;
}
salarioFinal(4962.6);
