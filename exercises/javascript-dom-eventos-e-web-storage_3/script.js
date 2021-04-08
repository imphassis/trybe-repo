/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// Importando dezDayList e colocando no calendário (com feriados e sextas)
function daysOnCalendar() {
  const allDays = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const x = dezDaysList[i];
    const liElement = document.createElement('li');
    liElement.innerText = x;
    liElement.classList.add('day');
    if (x === 24 || x === 25 || x === 31) {
      liElement.classList.add('holiday');
    }
    if (x === 4 || x === 11 || x === 18 || x === 25) {
      liElement.classList.add('friday');
    }

    allDays.appendChild(liElement);
  }
}

daysOnCalendar();
// Criando botão de Feriado
function holidaysButton() {
  x = document.createElement('button');
  x.innerText = 'Feriados';
  x.setAttribute('id', 'btn-holiday');
  document.querySelector('.buttons-container').appendChild(x);
}

holidaysButton();
// Criando botão de Sexta-Feira
function fridayButton() {
  x = document.createElement('button');
  x.innerText = 'Sexta-Feira';
  x.setAttribute('id', 'btn-friday');
  document.querySelector('.buttons-container').appendChild(x);
}

fridayButton();
// Atribuindo aos botões 'feriado' e 'sexta-feira' ações
function holidayColor() {
  x = document.getElementsByClassName('holiday');
  for (let i = 0; i < x.length; i += 1) {
    if (x[i].style.backgroundColor === 'lightblue') {
      x[i].style.backgroundColor = null;
    } else {
      x[i].style.backgroundColor = 'lightblue';
    }
  }
}

function fridayColor() {
  const x = document.getElementsByClassName('friday');
  const list = [4, 11, 18, 25];
  for (let i = 0; i < x.length; i += 1) {
    if (x[i].innerText === `SEXTOU`) {
      x[i].innerText = list[i];
    } else {
      x[i].innerText = `SEXTOU`;
    }
  }
}

function btns() {
  const btnHoliday = document.getElementById('btn-holiday');
  const btnFriday = document.getElementById('btn-friday');
  btnHoliday.addEventListener('click', holidayColor);
  btnFriday.addEventListener('click', fridayColor);
}
btns();

const daysList = document.querySelectorAll('.day');

function transitionDays() {
  for (let i = 0; i < daysList.length; i += 1) {
    daysList[i].style.transition = 'all 0.5s';
    daysList[i].addEventListener('mouseenter', (event) => {
      event.target.style.transform = 'scale(1.5)';
    });
    daysList[i].addEventListener('mouseout', (event) => {
      event.target.style.transform = 'scale(1.0)';
    });
  }
}
transitionDays();

const myTasks = document.querySelector('.my-tasks');
const inputContainer = document.querySelector('.input-container');
const btnAdd = document.querySelector('#btn-add');
const taskInput = document.querySelector('#task-input');

btnAdd.addEventListener('click', () => {
  const btn = document.createElement('span');
  btn.innerText = `${taskInput.value} `;
  myTasks.appendChild(btn);
});
btnAdd.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const btn = document.createElement('div');
  btn.style.backgroundColor = `#${randomColor}`;

  btn.addEventListener('click', (event) => {
    event.target.classList.add('task-selected');
  });

  myTasks.appendChild(btn);
});
