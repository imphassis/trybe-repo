const nameInput = document.getElementById('name-id');
const email = document.getElementById('email');
const cpfInput = document.getElementById('cpf-id');
const address = document.getElementById('address');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const houseType = document.getElementById('house-type');
const startDate = document.getElementById('start-date');
const resultado = document.getElementById('resultado');
const cleanButton = document.getElementById('cleanButton');
const fieldSet = document.querySelector('#personal-data input');
const formData = document.querySelector('form');
const formData1 = document.querySelector('fieldset').children;
console.log(formData1);

(function nameAttributes() {
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Digite seu nome:');
  nameInput.setAttribute('maxlength', '40');
  nameInput.setAttribute('required', 'true');
})();

(function emailAttributes() {
  email.setAttribute('name', 'email');
  email.setAttribute('type', 'text');
  email.setAttribute('placeholder', 'Digite seu email:');
  email.setAttribute('maxlength', '50');
  email.setAttribute('required', 'true');
})();

(function cpfInputattributes() {
  cpfInput.setAttribute('type', 'text');
  cpfInput.setAttribute('name', 'cpf');
  cpfInput.setAttribute('placeholder', 'Somente números:');
  cpfInput.setAttribute('maxlength', '11');
  cpfInput.setAttribute('required', 'true');
})();

(function addressAttributes() {
  address.setAttribute('type', 'text');
  address.setAttribute('name', 'address');
  address.setAttribute('placeholder', 'Digite seu endereço:');
  address.setAttribute('maxlength', '200');
  address.setAttribute('required', 'true');
})();

(function cityAttributes() {
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('name', 'city');
  cityInput.setAttribute('placeholder', 'Qual a sua cidade?');
  cityInput.setAttribute('maxlength', '28');
  cityInput.setAttribute('required', 'true');
})();

const StateList = [
  { name: 'Acre', acronym: 'AC' },
  { name: 'Alagoas', acronym: 'AL' },
  { name: 'Amapá', acronym: 'AP' },
  { name: 'Amazonas', acronym: 'AM' },
  { name: 'Bahia', acronym: 'BA' },
  { name: 'Ceará', acronym: 'CE' },
  { name: 'Distrito Federal', acronym: 'DF' },
  { name: 'Espírito Santo', acronym: 'ES' },
  { name: 'Goiás', acronym: 'GO' },
  { name: 'Maranhão', acronym: 'MA' },
  { name: 'Mato Grosso', acronym: 'MT' },
  { name: 'Mato Grosso do Sul', acronym: 'MS' },
  { name: 'Minas Gerais', acronym: 'MG' },
  { name: 'Paraná', acronym: 'PA' },
  { name: 'Paraíba', acronym: 'PB' },
  { name: 'Pará', acronym: 'PR' },
  { name: 'Pernambuco', acronym: 'PE' },
  { name: 'Piauí', acronym: 'PI' },
  { name: 'Rio de Janeiro', acronym: 'RJ' },
  { name: 'Rio Grande do Norte', acronym: 'RN' },
  { name: 'Rio Grande do Sul', acronym: 'RS' },
  { name: 'Rondonia', acronym: 'RO' },
  { name: 'Roraima', acronym: 'RR' },
  { name: 'Santa Catarina', acronym: 'SC' },
  { name: 'Sergipe', acronym: 'SE' },
  { name: 'São Paulo', acronym: 'SP' },
  { name: 'Tocantins', acronym: 'TO' },
];

(function stateAttributes() {
  for (let i = 0; i < StateList.length; i += 1) {
    x = document.createElement('option');
    x.setAttribute('value', `${StateList[i].name}`);
    x.innerText = StateList[i].acronym;
    stateInput.appendChild(x);
  }
})();

(function startDateAttribute() {
  startDate.setAttribute('placeholder', 'DD/MM/AAAA');
  // startDate.setAttribute('pattern', 'd{1,2}/d{1,2}/d{4}');
})();

formData.addEventListener('submit', (event) => {
  let data = new FormData(formData);
  let output = '';

  for (let entry of data.entries()) {
    output = output + entry[0] + '=' + entry[1] + '\r';
  }
  resultado.innerText = output;
  event.preventDefault();
});

cleanButton.addEventListener('click', () => {
  nameInput.value = '';
  email.value = '';
  address.value = '';
  cityInput.value = '';
  cpfInput.value = '';
  document.getElementById('cv-resume').value = '';
  document.getElementById('job-title').value = '';
  document.getElementById('job-description').value = '';
  document.getElementById('start-date').value = '';
  document.getElementById('cv-resume').value = '';
  document.getElementById('job-title').value = '';
  document.getElementById('job-description').value = '';
  document.getElementById('start-date').value = '';
});

nameInput.value = 'ASDFASDFASDF';
email.value = 'ASDFASDFASDF';
address.value = 'ASDFASDFASDF';
cityInput.value = 'ASDFASDFASDF';
cpfInput.value = 'ASDFASDFASDF';
document.getElementById('cv-resume').value = 'ASDFASDFASDF';
document.getElementById('job-title').value = 'ASDFASDFASDF';
document.getElementById('job-description').value = 'ASDFASDFASDF';
document.getElementById('start-date').value = 'ASDFASDFASDF';
document.getElementById('cv-resume').value = 'ASDFASDFASDF';
document.getElementById('job-title').value = 'ASDFASDFASDF';
document.getElementById('job-description').value = 'ASDFASDFASDF';
document.getElementById('start-date').value = 'ASDFASDFASDF';
