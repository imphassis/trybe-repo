const fetch = require('node-fetch');
const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const dogAPI = async (url) => {
  try {
    const dog = await fetch(url);
    const dogJson = await dog.json();
    return dogJson;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { dogAPI, apiUrl };
