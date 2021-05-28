// const fetch = require('node-fetch');

const jokeH2 = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';
let joke = '';
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, myObject).then((response) =>
    response.json().then((data) => (jokeH2.innerText = data.joke))
  );
};

const testJoke = () => {
  return fetchJoke();
};

window.onload = () => testJoke();
