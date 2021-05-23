import assert from 'assert';
import lodash from 'lodash';
const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }

  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeople(parameter);

console.log(output);

assert.deepStrictEqual(output, result);
