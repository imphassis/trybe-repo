/* eslint-disable no-undef */
const textBox = document.querySelector('.textBox');
// Criando botão que mostra paleta de Cores para o Background:
function backgroundColorButton() {
  const x = document.createElement('button');
  const div = document.createElement('div');
  div.setAttribute('id', 'div-bgColor');
  document.querySelector('.buttons').appendChild(div);
  x.innerText = 'Cor de fundo da tela';
  x.setAttribute('id', 'btn-bgColor');
  document.querySelector('#div-bgColor').appendChild(x);
}
backgroundColorButton();

// Criando paleta de cores para o Background:
function createBgPallet() {
  const pallet = document.createElement('input');
  pallet.setAttribute('id', 'bg-pallet');
  pallet.setAttribute('type', 'color');
  pallet.setAttribute('value', '#ff0000');
  pallet.setAttribute('hidden', 'true');
  document.querySelector('#div-bgColor').appendChild(pallet);
}
createBgPallet();

// Adicionando botão que mostra paleta de cores para texto:
function textColorButton() {
  const x = document.createElement('button');
  const div = document.createElement('div');
  div.setAttribute('id', 'div-textColor');
  document.querySelector('.buttons').appendChild(div);
  x.innerText = 'Cor do texto';
  x.setAttribute('id', 'btn-textColor');
  document.querySelector('#div-textColor').appendChild(x);
}
textColorButton();

// Criando paleta de cores para texto:
function createTxtPallet() {
  const pallet = document.createElement('input');
  pallet.setAttribute('id', 'txt-pallet');
  pallet.setAttribute('type', 'color');
  pallet.setAttribute('value', '#ff0000');
  pallet.setAttribute('hidden', 'true');
  document.querySelector('#div-textColor').appendChild(pallet);
}
createTxtPallet();

// Criando gatilho para botão "Cor do Texto" mostrar paleta de cores
const txtColorButton = document.getElementById('btn-textColor');
txtColorButton.addEventListener('click', () => {
  const txtPallet = document.getElementById('txt-pallet');
  if (txtPallet.getAttribute('hidden') === 'true') {
    txtPallet.removeAttribute('hidden');
  } else {
    txtPallet.setAttribute('hidden', 'true');
  }
});
const txtPallet = document.getElementById('txt-pallet');
txtPallet.addEventListener('input', (event) => {
  textBox.style.color = event.target.value;
});

// Adicionando botão que mostra seletor de tamanhos de texto:
function fontSizeButton() {
  const x = document.createElement('button');
  x.innerText = 'Tamanho da fonte';
  x.setAttribute('id', 'btn-fontSize');
  document.querySelector('.buttons').appendChild(x);
}
fontSizeButton();

// Adicionando botão que mostra seletor de espaçamento de texto:
function lineSpacingButton() {
  const x = document.createElement('button');
  x.innerText = 'Espaçamento';
  x.setAttribute('id', 'btn-lineSpacing');
  document.querySelector('.buttons').appendChild(x);
}
lineSpacingButton();

// Adicionando botão que mostra seletor de fonte de texto:
function fontFamilyButton() {
  const x = document.createElement('button');
  x.innerText = 'Tipo da Fonte';
  x.setAttribute('id', 'btn-fontType');
  document.querySelector('.buttons').appendChild(x);
}
fontFamilyButton();

const bgButton = document.getElementById('btn-bgColor');

bgButton.addEventListener('click', () => {
  const bgPallet = document.getElementById('bg-pallet');
  const submitButton = document.getElementById('bgColor-submit-button');
  if (bgPallet && submitButton) {
    bgPallet.remove();
    submitButton.remove();
  } else {
    const pallet = document.createElement('input');
    const button = document.createElement('input');
    pallet.setAttribute('type', 'color');
    pallet.setAttribute('id', 'bg-pallet');
    pallet.setAttribute('value', '#ff0000');
    button.setAttribute('id', 'bgColor-submit-button');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Submit');
    document.querySelector('#div-bgColor').appendChild(pallet);
    document.querySelector('#div-bgColor').appendChild(button);
  }
});
