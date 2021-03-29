/* eslint-disable no-console */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable prefer-const */

// /* eslint-disable prefer-const */
let number = 101;
for (let i = 1; i <= number; i += 1) {
  let zero = '-'.repeat(i);
  let zone = '*'.repeat(i * 2 - 1);
  if (i === 3) {
    zero = ' ';
  }
  let sideZero = '-'.repeat((number - i) / 2);
  if (i % 2 === 1) {
    if (i === 1) {
      console.log(`${sideZero}${zone}${sideZero}`);
    } else if (i >= 3 && i !== number) {
      zero = ' '.repeat(i - 2);
      console.log(`${sideZero}*${zero}*${sideZero}`);
    } else if (i === number) {
      console.log('*'.repeat(i));
    }
  }
}
