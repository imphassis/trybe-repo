const login = document.getElementById('login-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textareaInput = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const houseType = document.getElementById('house');

function loginTry() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', loginTry);

agreement.addEventListener('input', () => {
  if (submitButton.hasAttribute('disabled')) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
});

textareaInput.addEventListener('input', () => {
  if (textareaInput.value.length === 0) {
    counter.innerText = '500';
  } else {
    counter.innerText = 500 - textareaInput.value.length;
  }
});

function materiasChecked() {
  const x = document.querySelectorAll('.subject:checked');
  const y = [];
  for (let i = 0; i < x.length; i += 1) {
    y.push(` ${x[i].value}`);
  }
  return y;
}

function allForms(event) {
  const allFields = {
    Nome: `${inputName.value} ${inputLastName.value}`,
    Email: `${inputEmail.value}`,
    Casa: `${houseType.value}`,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: materiasChecked(),
    Avaliação: ` ${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `${textareaInput.value}`,
  };
  let y = '';
  for (const x of Object.keys(allFields)) {
    y += `${x}: ${allFields[x]}<br>`;

    event.preventDefault();
  }
  console.log(y);
  evaluationForm.innerHTML = y;
  event.preventDefault();
}

submitButton.addEventListener('click', allForms);
