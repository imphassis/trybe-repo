/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Primeiro exercício;
function contaBasica(a, b) {
  const soma = a + b;
  const subtração = a - b;
  const multiplicação = a * b;
  const divisão = a / b;
  const modulo = a % b;
  let resultado = `A soma de ${a}+${b} é: ${soma},
   a subtração é ${subtração},
   a multiplicação é ${multiplicação}, 
   a divisão é ${divisão.toFixed(2)}, 
   e o módulo é ${modulo}.`;
  console.log(resultado);
  return resultado;
}
contaBasica(25, 30);
