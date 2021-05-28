const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  const func = (acc, curr) => (curr === 'A' || curr == 'a' ? acc + 1 : acc);
  const namesJoined = names.join('').split('');
  return namesJoined.reduce(func, 0);
  // escreva seu código aqui
}

assert.deepStrictEqual(containsA(), 20);

console.log(containsA());
