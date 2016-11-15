import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MdInput } from '@angular/material';

import { TaskService } from './../task.service';
import { Task } from './../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent {
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<Task>();

  @ViewChild('descriptionInput') descriptionInput: MdInput;

  constructor(
    private taskService: TaskService
  ) { }

  save(description: string): void {
    this.taskService.create(description).then((task) => {
      this.onSave.emit(task);
      this.cancel();
    });
  }

  cancel(): void {
    this.onCancel.emit(false);
  }

  focus(): void {
    this.descriptionInput.focus();
  }

}
