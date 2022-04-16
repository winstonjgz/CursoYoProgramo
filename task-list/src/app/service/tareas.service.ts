import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Tareas } from 'src/app/Tareas';
// import { TAREAS } from 'src/app/mock-tareas';


@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiURL = 'http://localhost:5000/tareas'
  
  
  constructor(
    private http:HttpClient
  ) { }

  getTask(): Observable<Tareas[]>{
    /* const tareas= of(TAREAS);
    return tareas; */

    return this.http.get<Tareas[]>(this.apiURL)

  }
}
