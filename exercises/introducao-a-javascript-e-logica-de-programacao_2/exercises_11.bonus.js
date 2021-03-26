/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let tempList = [];
for (let index = 0; index < array.length; index += 1) {
  let lastNumber = array[index] * 2;
  let tempNumber = array[index] * array[index + 1];
  if (index < array.length - 1) {
    tempList.push(tempNumber);
  } else if (index === array.length - 1) {
    tempList.push(lastNumber);
  }
}

console.log(tempList);
