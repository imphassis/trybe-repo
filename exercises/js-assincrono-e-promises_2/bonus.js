const _ = require('lodash');
const redux = (acc, item) => (acc = acc + item);

const sumRandomArray = () => {
  return Array.from({ length: 10 }, () => _.random(1, 50) ** 2).reduce(redux);
};

const sumAll = (a) => {
  let array = [2, 3, 5, 10].map((el) => a / el);
  return array;
};

const myPromise = (el) => {
  if (el < 8000) {
    return el;
  } else {
    throw new Error();
  }
};

const newPromise = async () => {
  try {
    const a = await sumRandomArray();
    await myPromise(a);
    await sumAll(a);
    console.log(a);
  } catch (error) {
    console.log(`Deu ruim,${error}`);
  }
};
newPromise();
