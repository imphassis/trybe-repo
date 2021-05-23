/* eslint-disable no-console */
function untilN(n) {
  let resultado = 0;
  for (let i = 1; i <= n; i += 1) {
    resultado += i;
  }
  console.log(resultado);
}

untilN(4);
