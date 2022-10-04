import { FormularioRegister } from './formulario';

describe('formulario', () => {

  let componente: FormularioRegister;
  beforeEach(() => {componente = new FormularioRegister()})

  it('Debe de crear un formulario con dos campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  })
});