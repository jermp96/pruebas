import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  constructor() { }

  ngOnInit(){}
  
  saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }

}
