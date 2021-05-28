/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

let lista = [];
for (let i = 1; i <= 25; i += 1) {
  lista.push(i);
}
console.log(`A lista de 1 até 25 é esta: ${lista}`);

let listaDividida = [];
for (let i = 1; i <= lista.length; i += 1) {
  listaDividida.push(i / 2);
}

console.log(`A lista de 1 até 25/2 é esta: ${listaDividida}`);
