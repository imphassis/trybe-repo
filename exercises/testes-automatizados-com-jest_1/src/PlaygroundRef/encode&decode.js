const encode = (string) => {
  let stringToArray = Array.from(string);
  stringToArray.forEach((el) => {
    const alphabet = ['a', 'e', 'i', 'o', 'u'];
    const numerals = [1, 2, 3, 4, 5];
    if (alphabet.includes(el)) {
      const index = alphabet.findIndex((i) => i === el);
      return (stringToArray[index] = numerals[index]);
    }
  });
  return stringToArray.join('');
};

const decode = (string) => {
  let stringToArray = Array.from(string, (x) => (Number.isNaN(Number(x)) ? x : Number(x)));
  stringToArray.forEach((el) => {
    const alphabet = ['a', 'e', 'i', 'o', 'u'];
    const numerals = [1, 2, 3, 4, 5];
    if (numerals.includes(el)) {
      const index = numerals.findIndex((i) => i === el);
      return (stringToArray[index] = alphabet[index]);
    }
  });
  return stringToArray.join('');
};

console.log(encode('aeiou'));

module.exports = {
  encode,
  decode,
};
