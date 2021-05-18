const encoding = (string) => {
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

const decoding = (string) => {
  let stringToArray = Array.from(string, (x) => Number(x));
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

console.log(encoding('aeiou'), 'must return numbers');
console.log(decoding('12345'), 'must return vogals');
