/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const container = document.querySelector('.container');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClasses(event) {
  const y = document.getElementsByTagName('div');
  for (let i = 0; i < y.length; i += 1) {
    y[i].classList.remove('tech');
  }

  event.target.classList.add('tech');
}

divUm.addEventListener('dblclick', addClasses);
divDois.addEventListener('dblclick', addClasses);
divTres.addEventListener('dblclick', addClasses);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keyup', (event) => {
  let y = document.getElementsByClassName('tech')[0];
  y.innerHTML = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', () => {
  window.open('https://imphassis.github.io');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

document.querySelector('h1').setAttribute('id', 'spotrybefy');
const spotrybefy = document.querySelector('#spotrybefy');

spotrybefy.addEventListener('mouseenter', (event) => {
  event.target.style.color = 'red';
});

spotrybefy.addEventListener('mouseleave', (event) => {
  event.target.style.color = null;
});
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
