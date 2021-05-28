/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// 2. Programa que retorna maior de dois números
let varA = 10;
let varB = 2;

function maiorVar(x, y) {
  let resultado = 0;
  if (x > y) {
    resultado = x;
  } else {
    resultado = y;
  }
  console.log(`O maior número é: ${resultado}`);
  return resultado;
}

maiorVar(varA, varB);
