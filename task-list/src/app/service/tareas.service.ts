import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Tareas } from '../Tareas';
import { TAREAS } from '../mock-tareas';

const httpOptions = {
  headers: new HttpHeaders
    ({'Content-Type':'apllication/json'})
}


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

  deleteTarea(tareas: Tareas): Observable<Tareas>{
    const url= `${this.apiURL}/${tareas.id}`
    return this.http.delete<Tareas>(url)

  }


  updateTareaReminder(tareas: Tareas): Observable<Tareas>{
    const url= `${this.apiURL}/${tareas.id}`
    return this.http.put<Tareas>(url, tareas, httpOptions)

  }

  addTask(tareas:Tareas):Observable<Tareas>{
    
    return this.http.post<Tareas>(this.apiURL, tareas, httpOptions)

  }


}
