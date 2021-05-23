/* eslint-disable no-console */
/* eslint-disable prefer-const */
const stringTest = 'trybe';

function endWords(word, endo) {
  let tank = 0;
  for (let i = 1; i <= endo.length; i += 1) {
    if (word[word.length - i] === endo[endo.length - i]) {
      tank += 1;
    }
  }
  if (tank === endo.length) {
    console.log('true');
  } else {
    console.log('false');
  }
}

endWords(stringTest, 'be');
