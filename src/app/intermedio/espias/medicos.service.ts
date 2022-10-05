import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() 
export class MedicosService {

  constructor( public http: HttpClient) { }

  getMedicos() {
    return this.http.get('...');
  }

  agregarMedico( medico: any ): Observable<any> {
    return this.http.post('...', medico );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' );
  }


}

