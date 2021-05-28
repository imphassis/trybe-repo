const _ = require('lodash');
const sumRandomArray = () => {
  const randomArray = Array.from(
    { length: 10 },
    () => _.random(1, 50) ** 2
  ).reduce((acc, item) => (acc = acc + item));
  return randomArray;
};

const myPromise = () => {
  return new Promise((resolve, reject) => {
    let sum = sumRandomArray();
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject(sum);
    }
  });
};

const print = (el) => console.log(el);
const sumAll = (a) => {
  let array = [2, 3, 5, 10].map((el) => a / el);
  return array;
};

myPromise()
  .then((el) => console.log(`Promise resolvida ${el}`))
  .catch((el) =>
    console.log(`É mais de oito mil! Essa promise deve estar quebrada! ${el}`)
  );
