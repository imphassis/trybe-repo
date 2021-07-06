import { combineReducers } from 'redux';
import { REQUEST_DATA, GET_DATA } from '../actions';

const initialState = {
  loading: false,
  error: '',
};

const threadReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_DATA:
      return { ...state, loading: true };
    case GET_DATA:
      return { ...state, loading: false, payload };

    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({ threadReducer });
export default rootReducer;
