import { useState } from 'react';
const useArray = () => {
  const [array, setArray] = useState([]);

  const handleAddTask = (task) => {
    const newArray = [...array, task];
    setArray(newArray);
  };
  return [array, handleAddTask];
};

export default useArray;
