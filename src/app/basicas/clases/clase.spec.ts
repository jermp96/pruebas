import { Jugador } from './clase';

describe('pruebas de clases' , () => {
  const jugador = new Jugador();

  it('debe de retornar 80 de hp si recibe 20 de daño', () => {
    
    // const jugador = new Jugador();

    const res = jugador.recibeDanio(20);

    expect(res).toBe(80);
  });

  it('debe de retornar 50 de hp si recibe 50 de daño', () => {
    
    // const jugador = new Jugador();

    const res = jugador.recibeDanio(20);

    expect(res).toBe(80);
  });
});