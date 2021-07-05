import { REGISTER_USER } from '../actions';

const initialState = [];

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === REGISTER_USER && !state.includes(payload)) {
    return [...state, payload];
  }

  return state;
};

export default registerReducer;
