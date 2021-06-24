import React from 'react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';

describe('Testing the whole application', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });
  it('Should render the about component', () => {
    const { getByText, history } = renderWithRouter(<App />);
    userEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });
  it('Should render the noMatch component', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe');
    const notFound = getByText(/Página não encontrada/i);
    expect(notFound).toBeInTheDocument();
  });
  it('Should render only the About component', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});
