const createEmployee = (name) => {
  let x = name.split(' ').join('_').toLowerCase();
  return { name, email: `${x}@trybe.com` };
};

const employees = {};

const newEmployees = (x) => {
  let newID = `iD${Object.keys(employees).length + 1}`;
  employees[newID] = createEmployee(x);
  return employees;
};

newEmployees('Pedro Guerra');
newEmployees('Luiza Drumond');
newEmployees('Carla Paiva');

console.log(employees);
