const listLink = document.getElementById('listLinks');
const barButton = document.querySelector('.icon');

function showBar() {
  if (listLink.style.display === 'block') {
    listLink.style.display = 'none';
  } else {
    listLink.style.display = 'block';
  }
}

barButton.addEventListener('click', showBar);

for (let i = 0; i < listLink.length; i += 1) {
  console.log('blablabla');
}
