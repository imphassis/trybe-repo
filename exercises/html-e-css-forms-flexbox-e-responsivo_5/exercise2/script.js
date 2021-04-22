const asideOne = document.getElementsByClassName('aside-one')[0];
const barButton = document.querySelector('.icon');

function showBar() {
  if (asideOne.style.display === 'block') {
    asideOne.style.display = 'none';
  } else {
    asideOne.style.display = 'block';
  }
}

barButton.addEventListener('click', showBar);

console.log(barButton);
