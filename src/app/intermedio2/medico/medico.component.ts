import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  public medicos: any[] = [];

  constructor(private medicoService: MedicoService) { }

  ngOnInit(){}
  
  saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }

  ObtenerMedicos(): void {
    this.medicoService.getMedicos().subscribe({
      next: res => {
        this.medicos = res;
      }
    })
  }
}
