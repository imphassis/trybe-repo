import assert from 'assert';
import lodash from 'lodash';

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  title: 'My Title',
  description: 'My Description',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

const verifyFunction = (a, b) => (lodash.isEqual(a, b) ? true : false);

const teste1 = verifyFunction(obj1, obj2);
const teste2 = verifyFunction(obj1, obj3);
assert.strictEqual(teste1, true);
assert.strictEqual(teste2, false);
