let array = [2, 4, 6, 7, 10, 0, -3];
function menorValor(x) {
  let testlist = '';
  let testindex = '';
  for (let i = 0; i < x.length; i += 1) {
    if (testlist > x[i]) {
      testlist = x[i];
      testindex = [i];
    }
  }
  console.log(testindex.join(''));
}

menorValor(array);
