import App from './App';
import ValidEmail from './ValidEmail';

// modifique o import abaixo
import { render, fireEvent } from '@testing-library/react';

// Adicione esse teste.

describe('Checking if functions are working', () => {
  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const userEmail = 'email@email.com';
    const emptyInput = getByTestId('emptyInput');
    const typedAnswer = render(<ValidEmail email={userEmail} />).getByTestId('id-email-user');
    expect(emptyInput).toBeInTheDocument();
    expect(emptyInput).toHaveTextContent('Type your email address above');

    const sendButton = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: userEmail } });
    fireEvent.click(sendButton);
    expect(inputEmail).toHaveValue('');
    expect(typedAnswer).toHaveTextContent(`Valor: ${userEmail}`);
  });

  it('Verificando se a cor muda para vermelho caso o e-mail esteja errado', () => {
    const { getByTestId, getByLabelText, getByText } = render(<App />);
    const userEmail = 'teste';

    const validEmail = render(<ValidEmail email={userEmail} />);
    const typedAnswer = validEmail.getByTestId('id-email-user');
    const sendButton = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: userEmail } });
    fireEvent.click(sendButton);
    expect(typedAnswer.textContent).toBe('Valor: teste');
    expect(getByTestId('notVerified')).toBeInTheDocument();
  });
});
