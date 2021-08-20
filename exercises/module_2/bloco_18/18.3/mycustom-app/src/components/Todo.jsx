import React, { useState } from 'react';
import useArray from '../hooks/useArray';

export default function Todo() {
  const [currentTodo, setCurrentTodo] = useState();
  const [tasks, handleAddTask] = useArray();

  return (
    <div>
      <h1>To-do List</h1>
      <input
        onChange={({ target }) => setCurrentTodo(target.value)}
        type="text"
        placeholder="Add a to-do item"
      />
      <button type="button" onClick={() => handleAddTask(currentTodo)}>
        Add
      </button>
      <ul>{tasks && tasks.map((task) => <li key={task}>{task}</li>)}</ul>
    </div>
  );
}
