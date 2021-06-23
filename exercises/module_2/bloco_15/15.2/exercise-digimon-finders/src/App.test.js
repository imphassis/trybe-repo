import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Testing if the input element works', async () => {
    const { getByTestId } = render(<App />);
    const buttonSearch = getByTestId('buttonSearch');
    const inputText = getByTestId('input');
    expect(buttonSearch).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
  });

  it('Testing if the API works as it should', async () => {
    const data = [
      {
        name: 'Koromon',
        img: 'https://digimon.shadowsmith.com/img/koromon.jpg',
        level: 'In Training',
      },
    ];

    const response = { json: jest.fn().mockResolvedValue(data) };
    global.fetch = jest.fn().mockResolvedValue(response);
    const { getByTestId } = render(<App />);
    const buttonSearch = getByTestId('buttonSearch');
    const inputText = getByTestId('input');
    userEvent.type(inputText, 'Koromon');
    userEvent.click(buttonSearch);
    expect(global.fetch).toBeCalled();
    expect(global.fetch).toBeCalledTimes(1);
    await screen.findByText('level: In Training');
    await screen.findByText('Koromon');
  });
});
