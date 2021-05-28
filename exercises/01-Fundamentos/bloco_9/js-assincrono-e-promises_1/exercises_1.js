const messageDelay = () => Math.floor(Math.random() * 5000);
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback, handleError) => {
  const didOperationSucceed = Math.random() >= 0.6;
  let delay = messageDelay();
  if (!callback) {
    setTimeout(() => {
      console.log(
        `Mars temperature is ${getMarsTemperature()} degree Celsius, and this message took ${delay} ms to show `
      );
    }, delay);
  } else {
    callback(getMarsTemperature());
  }
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
