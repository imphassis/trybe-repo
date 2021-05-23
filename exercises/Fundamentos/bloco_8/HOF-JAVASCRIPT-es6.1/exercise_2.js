const randomNumber = () => Math.ceil(Math.random() * 5);

const pool = (bet, randomNumber) => {
  let draw = randomNumber();
  console.log(`Seu numero é ${bet}`);
  return bet === draw ? `Você ganhou!, o número era ${draw}` : ` Que peninha, o número era ${draw} :(`;
};

console.log(pool(4, randomNumber));
