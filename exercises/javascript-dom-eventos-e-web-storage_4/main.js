/* eslint-disable no-undef */
const textBox = document.querySelector('.textBox');

console.log(localStorage);

(function localStorageSettings() {
  if (localStorage.length !== 5) {
    localStorage.bgColor = 'white';
    localStorage.txtColor = 'black';
    localStorage.fontSize = '1em';
    localStorage.lineSpacing = '1em';
    localStorage.fontFamily = 'Courier New';
  }
})();

(function CoresBackground() {
  // Criando botão "Cor de Fundo da Tela"
  (function backgroundColorButton() {
    const x = document.createElement('button');
    const div = document.createElement('div');
    div.setAttribute('id', 'div-bgColor');
    document.querySelector('.buttons').appendChild(div);
    x.innerText = 'Cor de fundo da tela';
    x.setAttribute('id', 'btn-bgColor');
    document.querySelector('#div-bgColor').appendChild(x);
  })();

  // Criando paleta de cores para o Background:
  (function createBgPallet() {
    const pallet = document.createElement('input');
    pallet.setAttribute('id', 'bg-pallet');
    pallet.setAttribute('type', 'color');
    pallet.setAttribute('value', '#ff0000');
    pallet.setAttribute('hidden', 'true');
    document.querySelector('#div-bgColor').appendChild(pallet);
  })();

  // Criando gatilho para botão "Cor de fundo da tela" mostrar paleta de cores do Background:

  const bgColorButton = document.getElementById('btn-bgColor');
  bgColorButton.addEventListener('click', () => {
    const bgPallet = document.getElementById('bg-pallet');
    if (bgPallet.getAttribute('hidden') === 'true') {
      bgPallet.removeAttribute('hidden');
    } else {
      bgPallet.setAttribute('hidden', 'true');
    }
  });
  const bgPallet = document.getElementById('bg-pallet');
  bgPallet.addEventListener('input', (event) => {
    textBox.style.backgroundColor = event.target.value;
  });
})();

(function CoresTexto() {
  // Adicionando botão que mostra paleta de cores para texto:
  function textColorButton() {
    const button = document.createElement('button');
    const div = document.createElement('div');
    div.setAttribute('id', 'div-textColor');
    document.querySelector('.buttons').appendChild(div);
    button.innerText = 'Cor do texto';
    button.setAttribute('id', 'btn-textColor');
    document.querySelector('#div-textColor').appendChild(button);
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

  // Criando gatilho para botão "Cor do Texto" mostrar paleta de cores do texto:
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
})();

(function TamanhoFonte() {
  // Adicionando botão que mostra seletor de tamanhos de texto:
  function fontSizeButton() {
    const x = document.createElement('button');
    x.innerText = 'Tamanho da fonte';
    x.setAttribute('id', 'btn-fontSize');
    document.querySelector('.buttons').appendChild(x);
  }
  fontSizeButton();
})();

(function EspacamentoTexto() {
  // Adicionando botão que mostra seletor de espaçamento de texto:

  function lineSpacingButton() {
    const x = document.createElement('button');
    x.innerText = 'Espaçamento';
    x.setAttribute('id', 'btn-lineSpacing');
    document.querySelector('.buttons').appendChild(x);
  }
  lineSpacingButton();
})();

(function TipoFonte() {
  // Adicionando botão que mostra seletor de fonte de texto:
  function fontFamilyButton() {
    const x = document.createElement('button');
    x.innerText = 'Tipo da Fonte';
    x.setAttribute('id', 'btn-fontType');
    document.querySelector('.buttons').appendChild(x);
  }
  fontFamilyButton();
})();
