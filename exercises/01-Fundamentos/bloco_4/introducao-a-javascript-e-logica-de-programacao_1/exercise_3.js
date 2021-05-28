/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// 3. Programa que retorne o maior de três números
function maiorNumero(maiorA, maiorB, maiorC) {
  let resultado = '';
  if (maiorA > maiorB && maiorA > maiorC) {
    resultado = `O maior número é o ${maiorA}`;
  } else if (maiorB > maiorA && maiorB > maiorC) {
    resultado = `O maior número é o ${maiorB}`;
  } else if (maiorC > maiorA && maiorC && maiorB) {
    resultado = `O maior número é o ${maiorC}`;
  }
  console.log(resultado);
  return resultado;
}
maiorNumero(15, 25, 60);
