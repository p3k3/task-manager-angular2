import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent { 
  @Input() task: Task;
  @Input() isLast: boolean;

  @Output() onInfo = new EventEmitter<Task>();
  @Output() onEdit = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<Task>();

  constructor() { }

  setClasses() {
    let classes = {
      'task-list-item': true,
      'separator': !this.isLast
    };
    return classes;
  }

  info(): void {
    this.onInfo.emit(this.task);
  }

  edit(): void {
    this.onEdit.emit(this.task);
  }

  delete(): void {
    this.onDelete.emit(this.task);
  }
}
