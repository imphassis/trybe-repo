const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addObject = (object, key, value) => {
  object[key] = value;
};

addObject(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// const listKeys = (object) => {
//   for (i in object) {
//     console.log(i);
//   }
// };

// listKeys(lesson3);
// console.log('');

// const listValues = (x) => {
//   const keyAndValues = Object.entries(x);

//   for (i in keyAndValues) {
//     console.log(keyAndValues[i][1]);
//   }
// };

// listValues(lesson3);

// Exercício 5
let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// // Exercise 6
// function allStudents(lessons) {
//   let totalStudents = 0;
//   for (i in Object.keys(lessons)) {
//     totalStudents += Object.values(lessons)[i].numeroEstudantes;
//   }
//   return totalStudents;
// }

// console.log(allStudents(allLessons));

//Exercise 7

// const getValueByNumber = (object, index) => {
//   console.log(Object.values(object)[index]);
// };

// getValueByNumber(lesson1, 0);
// // console.log(Object.values(lesson1)[0]);

//Exercise 8
const evenExist = (object, key, value) =>
  object[key] === value ? console.log('true') : console.log('false');

evenExist(lesson3, 'turno', 'noite');
evenExist(lesson3, 'materia', 'Maria Clara');
