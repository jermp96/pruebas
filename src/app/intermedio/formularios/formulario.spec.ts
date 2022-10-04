import { FormularioRegister } from './formulario';

describe('formulario', () => {

  let componente: FormularioRegister;
  beforeEach(() => {componente = new FormularioRegister()})

  it('Debe de crear un formulario con dos campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('email debe de ser obligatorio', () => {
    const control = componente.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('email debe de ser un correo válido', () => {
    const control = componente.form.get('email');
    control?.setValue('jeremy@gmail.com');
    expect(control?.valid).toBeTruthy();
  });
});