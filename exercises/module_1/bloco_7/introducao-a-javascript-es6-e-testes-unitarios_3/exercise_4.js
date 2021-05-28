import assert from 'assert';

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
const teste1 = myFizzBuzz(15);
const teste2 = myFizzBuzz(3);
const teste3 = myFizzBuzz(5);
const teste4 = myFizzBuzz(16);
const teste5 = myFizzBuzz('x');

assert.strictEqual(teste1, 'fizzbuzz');
assert.strictEqual(teste2, 'fizz');
assert.strictEqual(teste3, 'buzz');
assert.strictEqual(teste4, 16);
assert.strictEqual(teste5, false);
