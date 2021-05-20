const math = require('./math');

// Faça o mock da funcão subtrair e teste sua chamada.
// Faça o mock da função multiplicar e implemente como retorno
//   padrão o valor '10'. Teste a chamada e o retorno.
// Faça o mock da função somar e implemente uma função que recebe dois
//   valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'.
//   Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'.
//   Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação
//   original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
//   Restaure a implementação original da função e teste sua execução.

describe('Testing math functions', () => {
  // it('Testing subtract mock function', () => {
  //   math.subtrair = jest.fn().mockReturnValue(7);
  //   math.subtrair();
  //   expect(math.subtrair).toHaveBeenCalled();
  //   expect(math.subtrair()).toBe(7);
  //   // Mesma aplicação dos testes do exemplo anterior...
  // });

  it('Testing multiply mock function', () => {
    math.multiplicar = jest.fn().mockReturnValue(15);
    math.multiplicar(3, 5);
    expect(math.multiplicar).toHaveBeenCalledWith(3, 5);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(15);

    // Mesma aplicação dos testes do exemplo anterior...
  });
  it('Assigning  sum function to a new mock function ', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    math.somar(10, 7);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(10, 7);
    expect(math.somar(10, 7)).toBe(17);

    // Mesma aplicação dos testes do exemplo anterior...
  });
  it('Assigning divide function to a new mock function ', () => {
    math.dividir = jest.fn().mockImplementation((a, b) => a / b);
    math.dividir(30, 2);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(30, 2);
    expect(math.dividir(30, 2)).toBe(15);
    math.dividir(2, 5);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir).toHaveBeenCalledWith(2, 5);
    expect(math.dividir(2, 5)).toBe(0.4);
    expect(math.dividir).toHaveBeenCalledTimes(4);

    // Mesma aplicação dos testes do exemplo anterior...
  });
});

describe('Mocking substract function with restored implementation', () => {
  it('Testing subtract mock function with restored values', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);
    mockSubtrair(10, 2);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair(10, 2)).toBe(20);

    // restoring;
    math.subtrair.mockRestore();
    math.subtrair(15, 2);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(15, 2);
    expect(math.subtrair(15, 2)).toBe(13);
  });
});
