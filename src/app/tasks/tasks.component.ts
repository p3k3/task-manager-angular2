import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { MdSidenav } from '@angular/material';

import { TaskNewComponent } from './../task-new/task-new.component';
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

export class TasksComponent implements OnInit {
  @Input() state: string;
  showListTitle: boolean;

  taskSelected: Task = new Task();
  taskEditing: Task = new Task();

  showTaskNew: boolean = false;
  showTaskEdit: boolean = false;
  dialogRef: MdDialogRef<TaskDeleteComponent>;

  @ViewChild(TaskListComponent) private taskListComponent: TaskListComponent;
  @ViewChild('taskNewComponent') taskNewComponent: TaskNewComponent;
  @ViewChild('taskInfo') private mdSidenav: MdSidenav;

  constructor(
    private snackBar: MdSnackBar,
    private dialog: MdDialog,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.showListTitle = false;

    if (!this.state) {
      this.state = this.route.snapshot.data['state'];
      if (this.state) {
        this.showListTitle = true;
      }
    }
  }

  showSnackBar(message: string): void {
    let config = new MdSnackBarConfig();
    let snackBarRef = this.snackBar.open(message, null, config);
    setTimeout(snackBarRef.dismiss.bind(snackBarRef), 5000);
  }

  //////////////
  // New task //
  //////////////
  showTaskNewInit(): void {
    this.showTaskNew = false;
  }

  newTask(): void {
    this.showTaskNew = true;
    setTimeout(() => {
      this.taskNewComponent.focus();
    }, 50);
  }

  create(task: Task) {
    this.taskService.create(task.description, this.state).then((newTask) => {
      // Refresco la lista
      this.taskListComponent.getTasks();

      // Muestro el mensaje
      this.showSnackBar('\'' + newTask.description + '\' created!');
    });
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
        this.taskService.delete(task._id).then(() => {
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
