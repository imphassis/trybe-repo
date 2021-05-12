const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const didOperationSucceed = Math.random() >= 0.6;
  let delay = messageDelay();
  setTimeout(() => {
    console.log(
      `Mars temperature is ${getMarsTemperature()} degree Celsius, and this message took ${delay} ms to show `
    );
  }, delay);
  getMarsTemperature();
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
