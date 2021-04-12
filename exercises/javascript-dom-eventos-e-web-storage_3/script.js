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

// Criando EventListener para os botões (sexta-feira e feriado)
function btns() {
  const btnHoliday = document.getElementById('btn-holiday');
  const btnFriday = document.getElementById('btn-friday');

  btnHoliday.addEventListener('click', () => {
    x = document.getElementsByClassName('holiday');
    for (let i = 0; i < x.length; i += 1) {
      if (x[i].style.backgroundColor === 'lightblue') {
        x[i].style.backgroundColor = null;
      } else {
        x[i].style.backgroundColor = 'lightblue';
      }
    }
  });
  btnFriday.addEventListener('click', () => {
    const x = document.getElementsByClassName('friday');
    const list = [4, 11, 18, 25];
    for (let i = 0; i < x.length; i += 1) {
      if (x[i].innerText === `SEXTOU`) {
        x[i].innerText = list[i];
      } else {
        x[i].innerText = `SEXTOU`;
      }
    }
  });
}
btns();

function transitionDays() {
  // Definindo daysList como nodeList de todos os dias do calendário
  const daysList = document.querySelectorAll('.day');
  // Iterando sobre cada item da array de daysList:
  for (let i = 0; i < daysList.length; i += 1) {
    // Para cada item da lista, se o evento ocorrer (se o gatilho for acionado),
    // ele responderá da seguinte forma:
    daysList[i].style.transition = 'all 0.5s';
    daysList[i].addEventListener('mouseenter', (event) => {
      event.target.style.transform = 'scale(1.8)';
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

// Exercício 8

function addTask(x) {
  const el = document.createElement('span');
  el.innerText = x;
  myTasks.appendChild(el);
}
addTask('Cozinhar');

function addLabel(color) {
  const el = document.createElement('div');
  el.style.backgroundColor = color;
  myTasks.appendChild(el);
}
addLabel('green');

// Exercício 9
const taskCircle = document.querySelector('.my-tasks div');
function taskSelection() {
  taskCircle.classList.add('tasks');

  taskCircle.addEventListener('click', () => {
    if (taskCircle.classList.contains('task-selected')) {
      taskCircle.classList.remove('task-selected');
    } else {
      taskCircle.classList.add('task-selected');
    }
  });
}
taskSelection();

// Exercício 10

const dayTask = document.querySelector('#days');

dayTask.addEventListener('click', (event) => {
  const currentColor = taskCircle.style.backgroundColor;
  // if (taskCircle.classList.contains('task-selected')) {
  //   if (event.target.style.color === currentColor) {
  //     event.target.style.color = null;
  //   } else {
  //     event.target.style.color = currentColor;
  //   }
  // }

  if (taskCircle.classList.contains('task-selected') === false) {
    return;
  }
  if (event.target.style.color === currentColor) {
    event.target.style.color = null;
  } else {
    event.target.style.color = currentColor;
  }
});

function addAppointment() {
  const taskList = document.querySelector('.task-list');
  const el = document.createElement('li');
  el.innerText = taskInput.value;
  taskList.appendChild(el);
  if (el.innerText === '') {
    alert('ERRO');
  }
  taskInput.value = '';
  taskInput.focus();
}

btnAdd.addEventListener('click', addAppointment);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addAppointment();
  }
});
