/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let min = lista[0]; // Define o menor valor como lista[no indice zero:5]
for (let i = 0; i < lista.length; i += 1) {
  if (lista[i] < min) {
    // Só prosseguirá se lista[i] (que em [0] tem valor de 5) for menor que min(que por enquanto tem valor 5)
    min = lista[i]; // lista[i] tem valor menor que min. Logo, min se torna o valor de lista[i].
    // que corre a array até achar um lista[i] que tenha valor menor que min.
  }
}
console.log(min);
