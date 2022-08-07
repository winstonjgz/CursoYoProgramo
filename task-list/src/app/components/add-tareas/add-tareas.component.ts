import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs';
import { UiService} from 'src/app/service/ui.service';
import{ Tareas } from '../../Tareas'

@Component({
  selector: 'app-add-tareas',
  templateUrl: './add-tareas.component.html',
  styleUrls: ['./add-tareas.component.css']
})
export class AddTareasComponent implements OnInit {
  @Output() onAddTareas:EventEmitter<Tareas>= new EventEmitter();
  
  text:string ="";
  day:string= "";
  reminder:boolean=false;
  showAddTask:boolean = false;
  subscription?: Subscriptipn;



  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => 
      this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("Por favor agrega una tarea");
      return
    }
    const {text,day,reminder} = this
    const newTask = {text, day, reminder}

    this.onAddTareas.emit(newTask);
  }

  /*Form tradicional 
    const newTask={
    text:this.text;
    day: this.day;
    reminder: this.reminder; }
    
    en OnSubmit la forma avanzada con javascript
    */
  
    

}
