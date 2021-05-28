const oddsAndEvens = [13, 3, 4, 10, 7, 2]

console.log(
  `Os números ${oddsAndEvens.sort(function (a, b) {
    return a - b
  })} se encontram ordenados de forma crescente!`
)
