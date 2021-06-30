export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTodo = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TASK,
  payload,
});
