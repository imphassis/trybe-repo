/* eslint-disable no-console */
const number = 37;
const bootle = [];
for (let index = 2; index < number; index += 1) {
  if (number % index === 0) {
    bootle.push(index);
  }
}
if (bootle.length === 0) {
  console.log('é primo');
} else {
  console.log('Não é primo');
}
