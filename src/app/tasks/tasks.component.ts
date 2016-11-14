import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { MdSidenav } from '@angular/material';

import { TaskListComponent } from './../task-list/task-list.component';
import { TaskDeleteComponent } from './../task-delete/task-delete.component';

import { TaskService } from './../task.service';

import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [MdSnackBar]
})
export class TasksComponent implements AfterViewInit {
  taskSelected: Task = new Task();
  taskEditing: Task = new Task();

  showTaskNew: boolean = false;
  showTaskEdit: boolean = false;
  dialogRef: MdDialogRef<TaskDeleteComponent>;

  @ViewChild(TaskListComponent)
  private taskListComponent: TaskListComponent;

  @ViewChild('taskInfo')
  private mdSidenav: MdSidenav;

  ngAfterViewInit() {
  }

  constructor(
    private snackBar: MdSnackBar,
    private dialog: MdDialog,
    private taskService: TaskService
  ) {}

  showSnackBar(message: string): void {
    let config = new MdSnackBarConfig();
    let snackBarRef = this.snackBar.open(message, null, config);
    setTimeout(snackBarRef.dismiss.bind(snackBarRef), 2000);
  }

  //////////////
  // New task //
  //////////////
  showTaskNewInit(): void {
    this.showTaskNew = false;
  }

  newTask(): void {
    this.showTaskNew = true;
  }

  createdNewTask(task: Task): void {
    // Refresco la lista
    this.taskListComponent.getTasks();

    // Muestro el mensaje
    this.showSnackBar('\'' + task.description + '\' created!');
  }

  ///////////////
  // Info task //
  ///////////////
  infoTask(task: Task): void {
    this.taskSelected = task;
    this.mdSidenav.open();
  }

  ///////////////
  // Edit task //
  ///////////////
  showTaskEditInit(): void {
    this.showTaskEdit = false;
  }

  editTask(task: Task): void {
    this.taskEditing = task;
    this.showTaskEdit = true;
  }

  editedNewTask(task: Task): void {
    // Refresco la lista
    this.taskListComponent.getTasks();

    // Muestro el mensaje
    this.showSnackBar('\'' + task.description + '\' edited!');
  }

  /////////////////
  // Delete task //
  /////////////////
  deleteTask(task: Task): void {
    let config = new MdDialogConfig();
    config.role = 'alertdialog';

    this.dialogRef = this.dialog.open(TaskDeleteComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Eliminar tarea
        this.taskService.delete(task.id).then(() => {
          // Refresco la lista
          this.taskListComponent.getTasks();

          // Muestro el mensaje
          this.showSnackBar('\'' + task.description + '\' deleted!');
        });
      }
      this.dialogRef = null;
    });
  }
}
