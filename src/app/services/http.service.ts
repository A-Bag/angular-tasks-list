import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from 'app/model/task';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class HttpService {
  readonly URL_DB = 'https://api.mlab.com/api/1//databases/angular_db/collections/tasks';
  readonly param: HttpParams;


  constructor(private http: HttpClient, private authService: AuthService) {
    this.getTasks();
  }

  getParams(): HttpParams {
    const uid = this.authService.user.uid;
    const query = {'userId': uid};
    return new HttpParams().set('apiKey', 'hS1RTVdDfwd-Bx1SIxSx2CHqyPdzvmir')
      .append('q', JSON.stringify(query));
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.getParams()});
  }
  saveTasks(tasks: Array<Task>) {
    this.http.put(this.URL_DB, tasks, {params: this.getParams()}).subscribe(data => console.log(data));
  }

}
