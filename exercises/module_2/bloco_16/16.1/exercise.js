const buttonPlus = document.getElementById('increment');
const buttonLess = document.getElementById('decrement');
const divPlus = document.getElementById('incrementDiv');
const divLess = document.getElementById('decrementDiv');
const addField = document.getElementById('addField');
const removeField = document.getElementById('removeField');
const value = document.getElementById('value');
const clickCounter = document.getElementById('clickCounter');

const initialState = {
  contador: 0,
  incrementValue: 0,
  decrementValue: 0,
  clickCount: 0,
  addedValue: 0,
};

const contadorReducer = (state = initialState, action) => {
  const cases = {
    INCREMENT: () => ({
      ...state,
      contador: state.contador + action.value,
      clickCount: state.clickCount + 1,
    }),
    DECREMENT: () => ({
      ...state,
      contador: state.contador - action.value,
      clickCount: state.clickCount + 1,
    }),
  };
  const { type } = action;
  if (cases[type]) {
    return cases[type]();
  }
};

const store = Redux.createStore(contadorReducer);

buttonPlus.addEventListener('click', () => {
  if (addField.value) {
    return store.dispatch({ type: 'INCREMENT', value: parseInt(addField.value) });
  }
  return store.dispatch({ type: 'INCREMENT', value: 1 });
});

buttonLess.addEventListener('click', () => {
  if (removeField.value) {
    return store.dispatch({ type: 'DECREMENT', value: parseInt(removeField.value) });
  }
  return store.dispatch({ type: 'DECREMENT', value: 1 });
});

store.subscribe(() => (value.innerHTML = store.getState().contador));
store.subscribe(() => (clickCounter.innerHTML = store.getState().clickCount));
