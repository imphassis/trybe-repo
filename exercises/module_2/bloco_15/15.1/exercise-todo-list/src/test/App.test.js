import React from 'react';
import { render, FireEvent, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText, getByTestId } = render(<App />);
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');

  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });

  test('Verificando se o botão de Adicionar existe', () => {
    const { getByText } = render(<App />);
    const addButton = getByText('Adicionar');
    expect(addButton).toBeInTheDocument();
    expect(addButton.type).toBe('button');
  });
  test('Verificando se ao clicar em adicionar, a tarefa é salva', () => {
    const { getByText, getByLabelText, getAllByTestId } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const addButton = getByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Fazer janta' } });
    fireEvent.click(addButton);
    fireEvent.change(inputTask, { target: { value: 'Tomar café' } });
    fireEvent.click(addButton);
    const listItem = getAllByTestId('listItem');
    expect(listItem[0].textContent).toBe('Fazer janta');
    expect(listItem[1].textContent).toBe('Tomar café');
  });
});
