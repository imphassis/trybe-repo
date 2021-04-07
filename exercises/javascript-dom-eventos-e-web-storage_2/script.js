/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Criando função para criar Elementos com Tag, ID e Classe
function elementOrigin(tag, id, classe) {
  const element = document.createElement(tag);
  if (id !== 'null') {
    element.setAttribute('id', id);
  }
  if (classe !== 'null') {
    element.classList.add(classe);
  }
  return element;
}

const bodY = document.body;

function searchClass(x) {
  const el = document.getElementsByClassName(x);
  return el;
}
// 1  - Adicione Tag h1
bodY.appendChild(elementOrigin('h1', 'null', 'null'));
// 1 - Adicione o Texto Exercício 5.2 - JavaScript DOM como filho da tag body
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.2 - JavaScript DOM';
// 2 - Adicione a tag div com classe 'main-content' como filho da tag 'body'
bodY.appendChild(elementOrigin('div', 'null', 'main-content'));
// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2
bodY.appendChild(elementOrigin('div', 'null', 'center-content'));
// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
searchClass('center-content')[0].appendChild(elementOrigin('p', 'null', 'null'));
// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
searchClass('main-content')[0].appendChild(elementOrigin('div', 'null', 'left-content'));
// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
searchClass('main-content')[0].appendChild(elementOrigin('div', 'null', 'right-content'));
// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image .
// Esse elemento deve ser filho do div criado no passo 5;
searchClass('left-content')[0].appendChild(elementOrigin('img', 'smallImage', 'small-image'));
document.getElementById('smallImage').src = 'https://picsum.photos/200';
// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista.
// Essa lista deve ser filha do div criado no passo 6;
searchClass('right-content')[0].appendChild(elementOrigin('ul', 'null', 'null'));

const lista = document.querySelector('.right-content ul');

const listaNumeros = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez',
];

for (let i = 0; i < listaNumeros.length; i += 1) {
  el = document.createElement('li');
  el.innerText = listaNumeros[i];
  lista.appendChild(el);
}
// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
searchClass('main-content')[0].appendChild(elementOrigin('h3', 'null', 'h3'));
searchClass('main-content')[0].appendChild(elementOrigin('h3', 'null', 'h3'));
searchClass('main-content')[0].appendChild(elementOrigin('h3', 'null', 'h3'));

// 1 - Adicione a classe title na tag h1 criada;
document.getElementsByTagName('h1')[0].classList.add('title');

// 2 - Adicione a classe 'description' nas 3 tags h3 criadas
document.querySelector('.h3').classList.add('description');
document.querySelector('.h3').nextElementSibling.classList.add('description');
document.querySelector('.h3').nextElementSibling.nextElementSibling.classList.add('description');

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
const leftContent = document.querySelector('.left-content');
document.querySelector('.main-content').removeChild(leftContent);

// 4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content )
document.querySelector('.right-content').style.marginRight = 'auto';
document.querySelector('.center-content').style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8
document.querySelector('ul').lastChild.remove();
document.querySelector('ul').lastChild.remove();
