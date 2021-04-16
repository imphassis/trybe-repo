const inputBox = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image-container');
const inputImage = document.getElementById('meme-insert');
const outputImage = document.getElementById('meme-image');
const locateFileButton = document.getElementById('locateFile');
const memeTemplate = document.getElementsByClassName('meme-templates');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function textInBox() {
  memeText.innerText = inputBox.value;
}

inputBox.addEventListener('keyup', textInBox);

function imageInBox(event) {
  const x = outputImage;
  x.src = URL.createObjectURL(event.target.files[0]);
}

inputImage.addEventListener('change', imageInBox);

locateFileButton.addEventListener('click', () => {
  inputImage.click();
});

function useTemplate() {
  for (let i = 0; i < memeTemplate.length; i += 1) {
    memeTemplate[i].addEventListener('click', () => {
      const x = outputImage;
      x.setAttribute('src', memeTemplate[i].src);
    });
  }
}
useTemplate();

imageContainer.style.border = '1px solid black';

fireButton.addEventListener('click', () => {
  imageContainer.style.removeProperty('border');
  if (imageContainer.classList.contains('fireBorder')) {
    imageContainer.classList.remove('fireBorder');
  } else {
    imageContainer.setAttribute('class', 'fireBorder');
  }
});

waterButton.addEventListener('click', () => {
  imageContainer.style.removeProperty('border');
  if (imageContainer.classList.contains('waterBorder')) {
    imageContainer.classList.remove('waterBorder');
  } else {
    imageContainer.setAttribute('class', 'waterBorder');
  }
});

earthButton.addEventListener('click', () => {
  imageContainer.style.removeProperty('border');
  if (imageContainer.classList.contains('earthBorder')) {
    imageContainer.classList.remove('earthBorder');
  } else {
    imageContainer.setAttribute('class', 'earthBorder');
  }
});
