import { mensaje } from './string';

describe('Pruebas de string', () => {
  it('Debe de regresar un string', () => {

    const response = mensaje('Jeremy');
    expect(typeof response).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Jeremy'
    const response = mensaje(nombre);
    expect(response).toContain(nombre);
  });
});