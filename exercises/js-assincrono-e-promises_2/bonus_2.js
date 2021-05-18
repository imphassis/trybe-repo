const _ = require('lodash');

const sumRandomArray = () =>
  Array.from({ length: 10 }, () => _.random(1, 50) ** 2).reduce((acc, item) => (acc = acc + item));

const myPromise = (sum) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sum >= 8000) {
        reject(`${sum} é maior que 8000`);
      }
      resolve(sum);
    }, 500);
  });
};

const newPromise = async () => {
  try {
    const soma = sumRandomArray();
    const somaResult = await myPromise(soma);
    console.log(somaResult);
  } catch (error) {
    console.error(error);
  }
};

newPromise();
