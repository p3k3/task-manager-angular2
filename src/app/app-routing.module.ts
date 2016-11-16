import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksGroupComponent } from './tasks-group/tasks-group.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksGroupComponent },
  { path: 'tasks/inbox', component: TasksComponent, data: { state: 'inbox'}},
  { path: 'tasks/next', component: TasksComponent, data: { state: 'next'}},
  { path: 'tasks/waiting', component: TasksComponent, data: { state: 'waiting'}},
  { path: 'tasks/someday', component: TasksComponent, data: { state: 'someday'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
