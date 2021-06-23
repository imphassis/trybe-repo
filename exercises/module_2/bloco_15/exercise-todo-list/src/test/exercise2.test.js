import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getAllByTestId, getByLabelText, getByText } = render(<App />); // Caso precise de uma nova query adicione no object destructuring
    listTodo.forEach((el, index) => {
      const inputText = getByLabelText('Tarefa:');
      const addButton = getByText('Adicionar');
      fireEvent.change(inputText, { target: { value: el } });
      fireEvent.click(addButton);
      const listItem = getAllByTestId('listItem');
      expect(listItem[index].textContent).toBe(el);
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content={'Beber água'} />);
    expect(getByText('Beber água')).toBeInTheDocument();
  });
});
