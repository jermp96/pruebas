import { incrementar } from './numeros';

describe('pruebas de numeros', () => {
  
  it('debe de retornar 100, si el numero ingresado es mayor a 100', () => {
    const res = incrementar(300);
    expect(res).toBe(100);
  });

  it('debe de retornar el número ingresado + 1, si noes mayor a 100', () => {
    const res = incrementar(50);
    expect(res).toBe(51);
  });

});