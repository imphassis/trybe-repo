import { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCount] = useState(0);
  const [message, setMessage] = useState('');

  function randomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }

  const showSuccess = () => (counter % 3 === 0 || counter % 5 === 0 ? 'success' : '');

  useEffect(() => {
    return setInterval(() => setCount(randomNumber()), 3000);
  }, []);

  useEffect(() => {
    setMessage(showSuccess());
    return setTimeout(() => setMessage(''), 1000);
  }, []);

  return [counter, message];
};

export default Counter;
