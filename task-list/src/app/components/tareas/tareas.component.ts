import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/Tareas';
import { TAREAS } from 'src/app/mock-tareas';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  // tareas: Tareas[] = TAREAS;
  tareas1: Tareas[] = TAREAS;

  constructor() { }

  ngOnInit(): void {
  }

}
