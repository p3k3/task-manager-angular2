import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent {

  constructor(
    public dialogRef: MdDialogRef<TaskDeleteComponent>
  ) { }

}
