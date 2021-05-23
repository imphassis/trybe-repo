/* eslint-disable prefer-const */

// /* eslint-disable prefer-const */
let number = 5;
for (let i = 1; i < number - 1; i += 1) {
  let zero = ' '.repeat(number - i);
  let zone = '*'.repeat(i * 2 - 1);
  console.log(zero, zone, zero);
}
