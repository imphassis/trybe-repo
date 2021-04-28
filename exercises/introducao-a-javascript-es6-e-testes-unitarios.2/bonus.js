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
  turno: 'manhã',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//Bonus 1
const createReport = (lessons, key, value) => {
  students = 0;
  for (i in Object.keys(lessons)) {
    if (Object.values(lessons)[i]['materia'] === 'Matemática') {
      students += Object.values(lessons)[i]['numeroEstudantes'];
    }
  }

  return students;
};

// console.log(createReport(allLessons, 'Matemática'));

//Bonus 2

const teacherReport = (lessons, teacher) => {
  let discipline = [];
  for (i in Object.keys(lessons)) {
    if (Object.values(lessons)[i]['professor'] === teacher) {
      discipline.push(Object.values(lessons)[i]['materia']);
    }
  }
  if (discipline[0] === discipline[1]) {
    discipline.filter((item) => item !== discipline);
  }

  students = 0;

  for (i in Object.keys(lessons)) {
    if (Object.values(lessons)[i]['materia'] === discipline[0]) {
      students += Object.values(lessons)[i]['numeroEstudantes'];
    }
  }

  console.log(`Professor: ${teacher}, 
  aulas: ${discipline}
  estudantes: ${students}`);
};

teacherReport(allLessons, 'Maria Clara');
