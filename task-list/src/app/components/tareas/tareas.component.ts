import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/Tareas';
// import { TAREAS } from 'src/app/mock-tareas';
import {TareasService} from '../../service/tareas.service'
import {faTimes} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  // tareas: Tareas[] = TAREAS;
  tareas: Tareas[] = [];
  faTimes = faTimes;


  constructor(
    private tareasService: TareasService) {
    
   } 
    

  ngOnInit(): void {
    //Like promise
     this.tareasService.getTask().subscribe( tareas =>
      this.tareas=tareas
      )

  }

}
