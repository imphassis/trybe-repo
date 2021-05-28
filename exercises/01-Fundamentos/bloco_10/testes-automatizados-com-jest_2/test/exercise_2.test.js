const { users, findUserById, getUserName } = require('../src/exercise_2');

describe('Check if findUserById function works as properly', () => {
  it('inserting findUserById(4) with the hope to get "name: Mark', () => {
    return expect(findUserById(4)).resolves.toEqual({ name: 'Mark' });
  });

  it('inserting getUserName(4) to get Mark using Promises', () => {
    return getUserName(4).then((user) => expect(user).toEqual('Mark'));
  });

  it('Getting ID4 using await', async () => {
    const user4 = await getUserName(4);
    await expect(user4).toEqual('Mark');
  });

  it('Trying to catch error using Promises', () => {
    return getUserName(6).then((user) => expect(user).toEqual({ error: 'User with 6 not found.' }));
  });

  it('Trying to catch error using await and async', async () => {
    const user6 = await getUserName(6);
    expect(user6).toEqual({ error: 'User with 6 not found.' });
  });
});
