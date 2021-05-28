const paiChildren = 5;

function selecionarPaleta(event) {
  for (let i = 0; i < paiChildren.length; i += 1) {
    paiChildren[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

paiChildren.addEventListener('click', selecionarPaleta);

quadrode25pixels.addEventListener('click', (event) => {
  event.target.classList.add('selected');
});
botãolimpar.addEventListener('click', () => {});
