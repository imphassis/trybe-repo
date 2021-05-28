const lodash = require('lodash');
const assert = require('assert');

/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

let checkString = (array) => lodash.every(array, lodash.isNumber);
let checkEmpty = (array) => lodash.isEmpty(array);

const average = (array) => {
  let newArray = 0;
  let counter = 0;
  let final;
  if (checkString(array) === false || checkEmpty(array) === true) {
    final = undefined;
  } else {
    for (let i = 0; i < array.length; i += 1) {
      newArray += array[i];
      counter += 1;
    }
    final = Math.round(newArray / counter);
  }
  return final;
};

// let string = [];
// let output = checkEmpty(string);

// console.log(output);

module.exports = average;
