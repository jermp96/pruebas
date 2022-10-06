import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) {
  }

  getMedicos(): Observable<any[]>{
    return this.http.get<any[]>('...');
  }
}
