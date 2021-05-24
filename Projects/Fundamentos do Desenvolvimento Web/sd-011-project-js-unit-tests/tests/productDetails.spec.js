const assert = require('assert');
const lodash = require('lodash');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const output = productDetails(1, 2);
    // Teste que o retorno da função é um array.
    assert.ok(
      lodash.isArray(productDetails(1)) === true,
      'Check if it is an array'
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.ok(productDetails(1).length === 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(
      lodash.isObject(output[0]) === true && lodash.isObject(output[1]) === true
    );
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(lodash.isEqual(output[0], output[1]) === false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let iD1 = Object.values(output[0].details);
    let iD2 = Object.values(output[1].details);
    let checkId = (array) => {
      let newArray = [];
      for (let i = 1; i < array[0].length; i += 1) {
        newArray.push(array[0][i]);
      }
      return newArray;
    };

    const output1 = checkId(iD1);
    const output2 = checkId(iD2);
    let expected = ['1', '2', '3'];

    assert.deepStrictEqual(output1, expected);
    assert.deepStrictEqual(output2, expected);
  });
});
