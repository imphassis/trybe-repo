/* eslint-disable no-undef */
const textBox = document.querySelector('.textBox');

console.log(window.getComputedStyle(textBox, null).getPropertyValue('font-size'));

const sizeButton = document.getElementById('btn-fontSize');
(function localStorageSettings() {
  if (localStorage.length === 0) {
    localStorage.bgColor = 'null';
    localStorage.txtColor = 'black';
    localStorage.fSize = '1em';
    localStorage.lSpacing = '1em';
    localStorage.ftFamily = 'Courier New';
  }
})();

(function defineSettingsLocalStorage() {
  textBox.style.backgroundColor = localStorage.bgColor;
  textBox.style.color = localStorage.txtColor;
  textBox.style.fontSize = localStorage.fSize;
  textBox.style.lineSpacing = localStorage.lSpacing;
  textBox.style.fontFamily = localStorage.ftFamily;
})();

(function CoresBackground() {
  // Criando botão "Cor de Fundo da Tela"
  (function backgroundColorButton() {
    const button = document.createElement('button');
    button.innerText = 'Cor de fundo da tela';
    button.setAttribute('id', 'btn-bgColor');
    document.querySelector('#div-bgColor').appendChild(button);
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

  // Criando gatilho para paleta de cores:
  (function backgroundTrigger() {
    const bgColorButton = document.getElementById('btn-bgColor');
    bgColorButton.addEventListener('click', () => {
      const bgPallet = document.getElementById('bg-pallet');
      if (bgPallet.getAttribute('hidden') === 'true') {
        bgPallet.removeAttribute('hidden');
      } else {
        bgPallet.setAttribute('hidden', 'true');
      }
    });

    // Gatilho para bgpallet trocar cor do background:
    const bgPallet = document.getElementById('bg-pallet');
    bgPallet.addEventListener('input', (event) => {
      localStorage.bgColor = event.target.value;
      textBox.style.backgroundColor = localStorage.bgColor;
    });
  })();
})();

(function CoresTexto() {
  // Adicionando botão que mostra paleta de cores para texto:
  (function textColorButton() {
    const button = document.createElement('button');
    button.innerText = 'Cor do texto';
    button.setAttribute('id', 'btn-textColor');
    document.querySelector('#div-textColor').appendChild(button);
  })();

  // Criando paleta de cores para texto:
  (function createTxtPallet() {
    const pallet = document.createElement('input');
    pallet.setAttribute('id', 'txt-pallet');
    pallet.setAttribute('type', 'color');
    pallet.setAttribute('value', '#ff0000');
    pallet.setAttribute('hidden', 'true');
    document.querySelector('#div-textColor').appendChild(pallet);
  })();

  // Criando gatilho para botão "Cor do Texto" mostrar paleta de cores do texto:
  (function txtColorTrigger() {
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
      localStorage.txtColor = event.target.value;
      textBox.style.color = localStorage.txtColor;
    });
  })();
})();

(function TamanhoFonte() {
  // Show LessButton
  const sizePlus = document.getElementById('btnSelectorPlus');
  sizeButton.addEventListener('click', () => {
    if (sizePlus.getAttribute('hidden') === 'true') {
      sizePlus.removeAttribute('hidden');
    } else {
      sizePlus.setAttribute('hidden', 'true');
    }
  });
  // Show PlusButton
  const sizeLess = document.getElementById('btnSelectorLess');
  sizeButton.addEventListener('click', () => {
    if (sizeLess.getAttribute('hidden') === 'true') {
      sizeLess.removeAttribute('hidden');
    } else {
      sizeLess.setAttribute('hidden', 'true');
    }
  });
  // Definindo tamanho da fonte
  sizePlus.addEventListener('click', () => {
    const style = window.getComputedStyle(textBox, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    localStorage.fSize = `${currentSize + 1}px`;
    textBox.style.fontSize = localStorage.fSize;
  });

  sizeLess.addEventListener('click', () => {
    const style = window.getComputedStyle(textBox, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    localStorage.fSize = `${currentSize - 1}px`;
    textBox.style.fontSize = localStorage.fSize;
  });
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
