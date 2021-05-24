/* eslint-disable guard-for-in */
// Desafio 10

function techList(ability, name) {
  ability.sort();
  let abilityList = [];
  if (Array.isArray(ability) && ability.length > 0) {
    for (let i = 0; i < ability.length; i += 1) {
      abilityList[i] = { tech: `${ability[i]}`, name };
    }
  } else {
    abilityList = 'Vazio!';
  }

  return abilityList;
}

// Desafio 11
function errorCheck(array) {
  let check = 'ok';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      check = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (array.length !== 11) {
    check = 'Array com tamanho incorreto.';
  }
  return check;
}

function arrayToObject(array) {
  let emptyObject = {};
  for (let i = 0; i < array.length; i += 1) {
    let y = array[i];
    if (emptyObject[y] == null) {
      emptyObject[y] = 1;
    } else emptyObject[y] += 1;
  }
  return emptyObject;
}

function tooManyNumbers(pN) {
  let x = arrayToObject(pN);
  let indexZero = '';
  for (let i in x) {
    if (x[i] >= 3) {
      indexZero = 'full';
      break;
    }
  }
  return indexZero;
}

function generatePhoneNumber(array) {
  let phoneArray = '(xx) xxxxx-xxxx';

  for (let i = 0; i < array.length; i += 1) {
    phoneArray = phoneArray.replace('x', array[i]);
  }
  if (tooManyNumbers(array) === 'full') {
    phoneArray = 'não é possível gerar um número de telefone com esses valores';
  }
  if (errorCheck(array) !== 'ok') {
    phoneArray = errorCheck(array);
  }

  return phoneArray;
}

// Desafio 12
function side(a, b, c) {
  let final;
  let calcA = c + b;
  let calcB = c + a;
  let calcC = a + b;
  if (c > calcC || b > calcB || a > calcA) {
    final = false;
  }
  return final;
}

function abs(cat1, cat2, hip) {
  let final;
  let sides;
  if (Math.abs(cat1 - cat2) > 0) {
    sides = Math.abs(cat1 - cat2);
  } else sides = Math.abs(cat2 - cat1);
  if (Math.abs(hip < sides)) {
    final = false;
  }
  return final;
}

function triangleCheck(lineA, lineB, lineC) {
  let x = abs;
  let a = lineA;
  let b = lineB;
  let c = lineC;
  let answer = true;
  if (side(a, b, c) === false) {
    answer = false;
  }
  if (x(a, b, c) || x(a, c, b) || x(b, c, a) === false) {
    answer = false;
  }
  return answer;
}
// Desafio 13
function numbersOfString(string) {
  let soma = 0;
  let array = string.match(/\d/g);
  array = array.join('');
  for (let i = 0; i < array.length; i += 1) {
    let std = Number(array[i]);
    soma += std;
  }
  return soma;
}

function hydrate(string) {
  let qtd;
  if (numbersOfString(string) === 1) {
    qtd = `${numbersOfString(string)} copo de água`;
  } else {
    qtd = `${numbersOfString(string)} copos de água`;
  }
  return qtd;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
