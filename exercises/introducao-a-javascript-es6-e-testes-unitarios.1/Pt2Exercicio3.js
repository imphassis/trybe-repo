let contador = document.getElementById('counter');
const button = document.getElementById('button');
let clickCount = 0;

button.addEventListener('click', (event) => {
  clickCount += 1;
  contador.innerText = clickCount;
});
