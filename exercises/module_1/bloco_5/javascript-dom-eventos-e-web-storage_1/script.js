/* eslint-disable no-multi-assign */
const paragraph = document.getElementsByTagName('P');
const mainContent = document.getElementsByClassName('main-content');
const h1Content = document.getElementsByTagName('h1');
const centerContent = document.getElementsByClassName('center-content');
const tagP = document.getElementsByTagName('p');
mainContent[0].style.backgroundColor = '#4CA46D';
centerContent[0].style.backgroundColor = 'white';
h1Content[0].innerText = 'Exercício 5.1 - JavasScript';
paragraph[0].innerText = 'Me vejo trabalhando em uma boa empresa';
paragraph[0].style.textTransform = 'uppercase';

for (let i = 0; i < tagP.length; i += 1) {
  console.log(tagP[i].innerText);
}
