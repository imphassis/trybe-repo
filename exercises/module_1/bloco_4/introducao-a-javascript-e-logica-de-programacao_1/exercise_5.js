/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa que verifica angulos de um triangulo:
function triangulo(AnguloA, anguloB, AnguloC) {
  let resultado;
  if (AnguloA <= 0 || anguloB <= 0 || AnguloC <= 0) {
    resultado = 'ERROR';
  } else if (AnguloA + anguloB + AnguloC === 180) {
    resultado = true;
  } else {
    resultado = false;
  }
  console.log(resultado);
  return resultado;
}

triangulo(40, 80, 100);
triangulo(40, 80, 60);
