/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let array = [2, 3, 2, 5, 8, 2, 3, 1];

function mostRepeated(x) {
  let emptyBottle = [];
  let tempCounter = 0;
  let points = 0;
  let char = 0;

  for (let i = 0; i < x.length; i += 1) {
    emptyBottle.push(x[i]);
    for (let j = 0; j < emptyBottle.length; j += 1) {
      if (x[i] === emptyBottle[j]) {
        tempCounter += 1;
        if (tempCounter > points) {
          points = tempCounter;
          char = x[i];
        }
      }
    }
    tempCounter = 0;
  }
  return char;
}

console.log(mostRepeated(array));
