let array = [2, 3, 6, 7, 10, 1];
function maiorValor(x) {
  let testlist = '';
  let testindex = '';
  for (let i = 0; i < x.length; i += 1) {
    if (testlist < x[i]) {
      testlist = x[i];
      testindex = [i];
    }
  }
  console.log(testindex.join(''));
}

maiorValor(array);
