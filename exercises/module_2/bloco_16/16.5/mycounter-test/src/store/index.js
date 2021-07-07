// src/store/index.js
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import clickReducer from '../reducers';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ clickReducer });

const composeEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer);

export default store;
