import { combineReducers } from 'redux';
import { SEND_DATA } from '../actions/index';

const initialState = {
  form: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    houseType: '',
    cvResume: '',
    jobRole: '',
    jobDescription: '',
    submitted: false,
  },
};

const formReducer = (state = initialState, action) => {
  const { payload, type } = action;
  if (type === SEND_DATA) {
    return { ...state, form: { ...state.form, ...payload } };
  }
  return state;
};

const rootReducer = combineReducers({ formReducer });

export default rootReducer;
