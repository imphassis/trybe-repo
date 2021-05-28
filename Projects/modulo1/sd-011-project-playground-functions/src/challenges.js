// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  array = [array[array.length - 1], array[0]];
  array = array.join(', ');
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = wins * 3 + ties * 1;
  return score;
}

console.log(footballPoints(10, 5));

// Desafio 6
function biggestNumber(array) {
  let bigNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (bigNumber < array[i]) {
      bigNumber = array[i];
    }
  }
  return bigNumber;
}

function highestCount(array) {
  let counter = 0;
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === biggestNumber(array)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function xmodule(cat, mouse) {
  if (cat - mouse > 0) {
    return cat - mouse;
  }
  return mouse - cat;
}

function catAndMouse(mouse, cat1, cat2) {
  let bestPosition = '';
  if (xmodule(cat1, mouse) < xmodule(cat2, mouse)) {
    bestPosition = 'cat1';
  } else if (xmodule(cat1, mouse) > xmodule(cat2, mouse)) {
    bestPosition = 'cat2';
  } else {
    bestPosition = 'os gatos trombam e o rato foge';
  }
  return bestPosition;
}

// Desafio 8

function Div(n) {
  let result = '';
  if (n % 3 === 0 && n % 5 === 0) {
    result = 'fizzBuzz';
  } else if (n % 3 === 0) {
    result = 'fizz';
  } else if (n % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = Div(array[i]);
  }
  return array;
}

// Desafio 9

function Enc(n) {
  let alphabet = ['a', 'e', 'i', 'o', 'u'];
  let numerals = [1, 2, 3, 4, 5];
  for (let i = 0; i < alphabet.length; i += 1) {
    if (n === alphabet[i]) {
      n = numerals[i];
    }
  }
  return n;
}

function numerize(s) {
  if (Number(s)) {
    let n = Number(s);
    s = n;
  }
  return s;
}

function Denc(x) {
  let n = numerize(x);
  const numerals = [1, 2, 3, 4, 5];
  const alphabet = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < numerals.length; i += 1) {
    if (n === numerals[i]) {
      n = alphabet[i];
    }
  }
  return n;
}

function encode(array) {
  array = array.split('');
  for (let i = 0; i < array.length; i += 1) {
    array[i] = Enc(array[i]);
  }
  array = array.join('');
  return array;
}

function decode(phrase) {
  let string = phrase.split('');
  for (let i = 0; i < string.length; i += 1) {
    string[i] = Denc(string[i]);
  }
  string = string.join('');
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
