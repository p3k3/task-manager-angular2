import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './../task';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() state: string;
  @Input() showTitle: boolean;

  @Output() onInfo = new EventEmitter<Task>();
  @Output() onEdit = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<Task>();

  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks(this.state).then(tasks => this.tasks = tasks);
  }

  infoTask(task: Task): void {
    this.onInfo.emit(task);
  }

  editTask(task: Task): void {
    this.onEdit.emit(task);
  }

  deleteTask(task: Task): void {
    this.onDelete.emit(task);
  }

}