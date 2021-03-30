/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let array = [2, 3, 2, 5, 8, 2, 3];

function mostRepeated(x) {
  let temp = 0;
  let points = 0;
  let char = '';
  let tank = [];

  for (let i = 0; i < x.length; i += 1) {
    tank.push(x[i]);
    for (let j = 0; j < tank.length; j += 1) {
      let is = x[i];
      let js = tank[j];
      if (is === js) {
        temp += 1;
        if (temp > points) {
          points = temp;
          char = x[i];
        }
      }
      temp = 0;
    }
  }
  console.log(char);
}

mostRepeated(array);
