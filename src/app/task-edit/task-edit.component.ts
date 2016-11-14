import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MdInput } from '@angular/material';

import { TaskService } from './../task.service';
import { Task } from './../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements AfterViewInit {
  @Input() task: Task;

  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<Task>();

  @ViewChild('descriptionInput') descriptionInput: MdInput;

  constructor(
    private taskService: TaskService
  ) { }

  ngAfterViewInit() {
    // TODO: Falla con @angular/material 2.0.0-alpha.10
    //this.descriptionInput.value = this.task.description;
  }

  save(description: string): void {
    this.taskService.create(description).then((task) => {
      this.onSave.emit(task);
      this.cancel();
    });
  }

  cancel(): void {
    this.onCancel.emit(false);
  }
}
