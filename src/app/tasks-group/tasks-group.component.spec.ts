/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasksGroupComponent } from './tasks-group.component';

describe('TasksGroupComponent', () => {
  let component: TasksGroupComponent;
  let fixture: ComponentFixture<TasksGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
