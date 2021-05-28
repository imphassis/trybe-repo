const wakeUp = () => console.log('Acordando!');
const coffeeTime = () => console.log('Bora tomar café!!');
const sleepTime = () => console.log('Partiu dormir!!');

const doingThings = (action) => {
  return action();
};

doingThings(wakeUp);
doingThings(coffeeTime);
doingThings(sleepTime);
