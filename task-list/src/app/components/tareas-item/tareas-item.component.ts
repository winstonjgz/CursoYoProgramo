import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Tareas} from '../../Tareas'
import {TAREAS} from '../../mock-tareas'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tareas-item',
  templateUrl: './tareas-item.component.html',
  styleUrls: ['./tareas-item.component.css']
})
export class TareasItemComponent implements OnInit {
  @Input() tareas: Tareas = TAREAS[0];
  @Output() onDeleteTarea: EventEmitter<Tareas> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Tareas> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(tareas: Tareas){
    // console.log(tareas);
    this.onDeleteTarea.emit(tareas);
  }

  onToggle(tareas: Tareas){
    // console.log(tareas);
    this.onToggleReminder.emit(tareas);
  }

}
