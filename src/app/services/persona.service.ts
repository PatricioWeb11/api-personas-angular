import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../interfaces/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]>{
    // return this.http.get<Persona[]>(`${this.BASE_URL}/personas`);
    return this.http.get<Persona[]>('http://localhost:3000/personas');
  }

  getPersona(id:string): Observable<Persona>{
    return this.http.get<Persona>(`${this.BASE_URL}/personas/${id}`);
  }

  createPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(`${this.BASE_URL}/personas/create`, persona);
  }

  updatePersona(id: string, persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.BASE_URL}/personas/update?personaID=${id}`, persona);
  }

  deletePersona(id: string): Observable<Persona>{
    return this.http.delete<Persona>(`${this.BASE_URL}/personas/delete?personaID=${id}`);
  }

}
