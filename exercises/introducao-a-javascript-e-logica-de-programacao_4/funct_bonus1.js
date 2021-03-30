/* eslint-disable prefer-const */
let array = 'XXXXX';

function numRomanos(number) {
  let tank = Array.from(number);
  for (let i = 0; i < number; i += 1) {
    tank.push(number[i]);
    //     tank.push(number[i]);
    //     if (tank[i] === tank[i + 1] && tank[i] === tank[i + 2]) {
    //       console.log('right');
    //     } else {
    //       console.log('wrong');
    //     }
  }
  console.log(tank);
}

numRomanos(array);
