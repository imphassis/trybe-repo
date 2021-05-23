// function fatorial(x) {
//   let fat = 1;
//   while (x > 1) {
//     fat *= x;
//     x -= 1;
//   }
//   return fat;
// }

// console.log(fatorial(5));

const recursivo = (x) => (x === 0 ? 1 : x * recursivo(x - 1));

// console.log(recursivo(5));

// const recursivo = (x) => {
//   if (x === 0) {
//     return 1;
//   } else {
//     return x * recursivo(x - 1);
//   }
// };
const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));
console.log(recursivo(5));
