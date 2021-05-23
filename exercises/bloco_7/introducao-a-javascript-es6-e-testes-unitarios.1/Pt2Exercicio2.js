let longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu';

function maiorPalavra(x) {
  let s = x.split(' ');
  s.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(s[0]);
  return s[0];
}

maiorPalavra(longestWord);
