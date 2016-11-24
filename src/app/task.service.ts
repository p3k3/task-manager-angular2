import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TaskService {
  private apiURL = 'http://localhost:3000'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  getTasks(state?: string): Promise<Task[]> {
    let url = this.apiURL + '/tasks';
    /* TODO:
    if (state) {
      url += '?state=' + state;
    }
    */

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);
  }

  create(description: string, state: string): Promise<Task> {
    return this.http
      .post(this.apiURL + '/tasks', JSON.stringify(
          {description: description, state: state}
        ), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(task: Task): Promise<Task> {
    const url = this.apiURL + '/task/' + task._id;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  delete (id: string): Promise<void> {
    const url = this.apiURL + '/task/' + id;
    return this.http.delete(url)
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error); // for demo purpose only
    return Promise.reject(error.message || error);
  }
}
