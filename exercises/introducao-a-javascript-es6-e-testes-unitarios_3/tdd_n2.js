import assert from 'assert';
import lodash from 'lodash';

const removeVowels = (word) => {
  let characters = word.split('');
  let points = 0;
  const alphabet = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < characters.length; i += 1) {
    for (let j = 0; j < alphabet.length; j += 1) {
      if (characters[i] === alphabet[j]) {
        points += 1;
        characters[i] = points;
      }
    }
  }
  characters = lodash.join(characters, '');
  return characters;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const output = removeVowels(parameter);
console.log(output);

assert.deepStrictEqual(output, result);
