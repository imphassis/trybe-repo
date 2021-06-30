import { combineReducers } from 'redux';
import { ADD_TASK } from '../actions';
import { REMOVE_TASK } from '../actions';

const initialState = {
  list: [],
};

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ADD_TASK) {
    return { ...state, list: [...state.list, payload] };
  }
  if (type === REMOVE_TASK) {
    return { ...state, list: [...state.list.filter((el) => el !== payload)] };
  }
  return state;
};

const rootReducer = combineReducers({ listReducer });

export default rootReducer;
