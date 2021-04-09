/* eslint-disable no-undef */
const textBox = document.querySelector('.textBox');

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
  const spaceLineButton = document.getElementById('btn-lineSpacing');
  // Show LessButton
  const spaceSizePlus = document.getElementById('btnSpaceSelectorPlus');
  spaceLineButton.addEventListener('click', () => {
    if (spaceSizePlus.getAttribute('hidden') === 'true') {
      spaceSizePlus.removeAttribute('hidden');
    } else {
      spaceSizePlus.setAttribute('hidden', 'true');
    }
  });

  // Show PlusButton
  const spaceSizeless = document.getElementById('btnSpaceSelectorLess');
  spaceLineButton.addEventListener('click', () => {
    if (spaceSizeless.getAttribute('hidden') === 'true') {
      spaceSizeless.removeAttribute('hidden');
    } else {
      spaceSizeless.setAttribute('hidden', 'true');
    }
  });

  // Definindo tamanho do espaçamento
  spaceSizePlus.addEventListener('click', () => {
    const style = window.getComputedStyle(textBox, null).getPropertyValue('line-height');
    const currentSize = parseFloat(style);
    localStorage.lSpacing = `${currentSize + 1}px`;
    textBox.style.lineHeight = localStorage.lSpacing;
  });

  spaceSizeless.addEventListener('click', () => {
    const style = window.getComputedStyle(textBox, null).getPropertyValue('line-height');
    const currentSize = parseFloat(style);
    localStorage.lSpacing = `${currentSize - 1}px`;
    textBox.style.lineHeight = localStorage.lSpacing;
  });
})();

(function TipoFonte() {
  // Show fontFamilyOptions
  const fontFamilyButton = document.getElementById('btn-fontFamily');
  fontFamilyButton.addEventListener('click', () => {
    const fontList = document.querySelector('#radio').children;
    for (let i = 0; i < fontList.length; i += 1) {
      if (fontList[i].getAttribute('hidden') === 'true') {
        fontList[i].removeAttribute('hidden');
      } else {
        fontList[i].setAttribute('hidden', 'true');
      }
    }
  });
})();
