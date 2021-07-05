import fetch from 'node-fetch';

export default async function API() {
  const URL = 'https://randomuser.me/api/';
  const randomUser = await fetch(URL);
  const response = await randomUser.json();
  return [...response.results];
}
