import { Component, OnInit, Input } from '@angular/core';

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
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
