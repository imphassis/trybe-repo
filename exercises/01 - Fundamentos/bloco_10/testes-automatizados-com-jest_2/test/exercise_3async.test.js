const { users, findUserById, getUserName } = require('../src/exercise_3async.js');

describe('Check if findUserById function works as properly', () => {
  it('Checking findUserById(4) using await and async', async () => {
    const user4 = await findUserById(4);
    return expect(user4).toEqual({ name: 'Mark' });
  });
  it('Checking ERROR findUserById(4) using await and async', async () => {
    try {
      const user6 = await findUserById(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  });
});
