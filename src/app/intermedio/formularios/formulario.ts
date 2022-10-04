import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FormularioRegister {
  public form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
}