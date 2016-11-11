import { Component, Input } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent {
  @Input() task: Task;

  constructor() { }

}
