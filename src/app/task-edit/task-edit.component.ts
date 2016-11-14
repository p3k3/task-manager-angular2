import { Component, Input, Output, EventEmitter, ViewChild, AfterContentInit } from '@angular/core';
import { MdInput } from '@angular/material';

import { TaskService } from './../task.service';
import { Task } from './../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements AfterContentInit {
  @Input() task: Task;

  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<Task>();

  @ViewChild('descriptionInput') descriptionInput: MdInput;

  constructor(
    private taskService: TaskService
  ) { }

  ngAfterContentInit() {
    this.descriptionInput.value = this.task.description;
  }

  save(description: string): void {
    this.task.description = description;

    this.taskService.update(this.task).then((task) => {
      this.onSave.emit(task);
      this.cancel();
    });
  }

  cancel(): void {
    this.onCancel.emit(false);
  }
}
