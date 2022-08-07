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

  deleteTarea(tareas:Tareas){
    /* this.tareasService.deleteTarea(tareas)
    .subscribe(
      =>
      this.tareas = this.tareas.filter( (t) =>{
        return t.id !==tareas.id
      })
    ) */
      console.log("revisar el borrado")
  }

  toggleReminder(tareas: Tareas){
    tareas.reminder=!tareas.reminder
    // console.log(tareas)
    this.tareasService.updateTareaReminder(tareas).subscribe();



  }

  addTask(tareas:Tareas){
    this.tareasService.addTask(tareas).subscribe( tareas=>
      this.tareas.push( tareas ) )
  }
}