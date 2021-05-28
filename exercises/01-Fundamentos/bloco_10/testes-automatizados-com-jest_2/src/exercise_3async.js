const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }
    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID)
    .then((user) => user.name)
    .catch((user) => user);
};

const getUser = async (id) => {
  try {
    const userID = await findUserById(id);
    return userID.name;
  } catch (error) {
    return error;
  }
};

module.exports = {
  users,
  findUserById,
  getUserName,
};
