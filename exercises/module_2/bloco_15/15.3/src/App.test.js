import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';

it('deve renderizar o componente App', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Welcome to my Portfolio/i);
  expect(home).toBeInTheDocument();
});
