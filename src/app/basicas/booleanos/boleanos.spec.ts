import { usuarioIngresado } from './boleanos';

describe('prueba de booleanos', () => {
  it('debe de retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
});