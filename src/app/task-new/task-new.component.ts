import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MdInput } from '@angular/material';

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

  constructor() { }

  save(): void {
    let task: Task = new Task();
    task.description = this.descriptionInput.value;
    this.onSave.emit(task);
    this.cancel();
  }

  cancel(): void {
    this.onCancel.emit();
  }

  focus(): void {
    this.descriptionInput.focus();
  }
}
