import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './task.service';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MenuComponent } from './menu/menu.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskNewComponent,
    TaskListComponent,
    TaskDeleteComponent,
    TaskInfoComponent,
    TaskEditComponent,
    MenuComponent,
    TaskListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
  entryComponents: [TaskDeleteComponent]
})
export class AppModule { }
