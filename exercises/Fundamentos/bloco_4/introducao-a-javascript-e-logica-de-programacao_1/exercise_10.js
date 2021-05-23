/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Programa 10: Calculo de lucro:

function valorProduto(custo, valorVenda) {
  let imposto = 1.2;
  let custoTotal = custo * imposto;
  let lucro = valorVenda - custoTotal;
  if (custo <= 0 || valorVenda <= 0) {
    lucro = 'ERROR';
    console.log(lucro);
  } else {
    lucro *= 1000;
    console.log(`A venda de 1000 produtos trará um lucro de ${lucro} reais`);
  }
  return lucro;
}

valorProduto(265, 380);
