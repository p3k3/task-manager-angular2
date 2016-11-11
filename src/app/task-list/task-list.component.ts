import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from './../task';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() onDelete = new EventEmitter<Task>();
  @Output() onInfo = new EventEmitter<Task>();

  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  infoTask(task: Task): void {
    this.onInfo.emit(task);
  }

  deleteTask(task: Task): void {
    this.onDelete.emit(task);
  }

}