import { SEND_INFO } from '../actions';

const initialState = {
  email: 'user@teste.com',
  password: '1234',
  auth: false,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SEND_INFO) {
    if (state.email === payload.email && state.password === payload.password) {
      return { ...state, auth: true };
    }
  }
  return state;
};

export default loginReducer;
