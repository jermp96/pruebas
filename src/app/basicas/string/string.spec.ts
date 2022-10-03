import { mensaje } from './string';

describe('Pruebas de string', () => {
  it('Debe de regresar un string', () => {

    const response = mensaje('Jeremy');
    expect(typeof response).toBe('string');
  })
});