import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import renderWithRedux from './renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('a click in a button should increment the value of clicks', () => {
    const { getByTestId, getByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });
    const buttonAdicionar = getByText('Clique aqui');
    fireEvent.click(buttonAdicionar);
    fireEvent.click(buttonAdicionar);
    console.log(getByTestId('counter-test').innerHTML);

    // expect(queryByText('5')).toBeInTheDocument();
  });
  // test('the page should has a button and a text 0', () => {
  //   const { getByText } = renderWithRedux(<App />);
  //   const buttonAdicionar = getByText('Clique aqui');
  //   expect(buttonAdicionar).toBeInTheDocument();
  //   const quantity = getByText('0');
  //   expect(quantity).toBeInTheDocument();
  // });
  // test('testing if the addButton works', () => {
  //   const { queryByText, getByTestId } = renderWithRedux(<App />);
  //   const buttonAdicionar = queryByText('Clique aqui');
  //   expect(buttonAdicionar).toBeInTheDocument();
  //   expect(queryByText('0')).toBeInTheDocument();
  //   for (let i = 0; i < 10; i += 1) {
  //     fireEvent.click(buttonAdicionar);
  //   }
  //   const counterTest = getByTestId('counter-test');
  //   expect(counterTest).toBeInTheDocument();
  //   expect(counterTest.innerHTML).toBe('10');
  // });

  // test('a click in a button should increment the value of clicks', () => {
  //   const { getByText } = renderWithRedux(<App />, {
  //     initialState: { clickReducer: { counter: 15 } },
  //   });
  //   const buttonAdicionar = getByText('Clique aqui');
  //   const quantity = getByText('5');
  //   expect(quantity).toBeInTheDocument();
  //   // fireEvent.click(buttonAdicionar);
  //   // expect(queryByText('5')).toBeInTheDocument();
  // });
});
