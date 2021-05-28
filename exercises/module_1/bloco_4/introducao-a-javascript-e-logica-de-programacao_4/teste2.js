/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const i in names) {
  console.log(`Olá ${names[i]}`);
}

const carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};

for (const i in carro) {
  console.log(`${i}: ${carro[i]}`);
}
