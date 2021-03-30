/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestChar(x) {
  let pseudo = '';
  for (let i = 0; i < x.length; i += 1) {
    if (x[i].length > pseudo.length) {
      pseudo = x[i];
    }
  }
  console.log(pseudo);
}

biggestChar(array);
