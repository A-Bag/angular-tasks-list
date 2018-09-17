import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from 'app/model/task';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {
  readonly URL_DB = 'https://api.mlab.com/api/1//databases/angular_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'hS1RTVdDfwd-Bx1SIxSx2CHqyPdzvmir');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
  }
  saveTasks(tasks: Array<Task>) {
    this.http.put(this.URL_DB, tasks, {params: this.param}).subscribe(data => console.log(data));
  }

}
