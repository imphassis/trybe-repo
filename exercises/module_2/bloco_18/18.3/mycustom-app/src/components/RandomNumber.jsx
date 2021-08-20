import React from 'react';

import useCounter from '../hooks/useCounter';

export default function RandomNumber() {
  const [counter, showSuccess] = useCounter();
  return (
    <div>
      <h1>My Random Clock</h1>
      <h2>{counter}</h2>
      <p>{showSuccess}</p>
    </div>
  );
}
