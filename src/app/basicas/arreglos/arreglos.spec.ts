import { obtenerRobots } from './arreglos';

xdescribe('pruebas de arreglos', () => {
  it('debe de retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('debe de existir EVA-01 Y EVA-02', () => {
    const res = obtenerRobots();
    expect(res).toContain('EVA-01');
    expect(res).toContain('EVA-02');
  });
});