import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string = '';

  constructor( private medicoService: MedicosService ) { }

  ngOnInit() {
    this.medicoService.getMedicos()
          .subscribe({
            next: (medicos:any) => {this.medicos = medicos}
          });
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this.medicoService.agregarMedico(medico).subscribe({
      next: (medicoDB: any) => {this.medicos.push(medicoDB)},
      error: (err: any) => {this.mensajeError = err  }    
    });
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if ( confirmar ) {
      this.medicoService.borrarMedico( id );
    }

  }

}
