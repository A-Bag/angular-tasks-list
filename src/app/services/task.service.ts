import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Task} from '../model/task';
import {HttpService} from './http.service';

@Injectable()
export class TaskService {
  private tasksObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(tasks => this.tasksObs.next(tasks));
  }

  add(task: Task) {
    const list = this.tasksObs.getValue();
    list.push(task);
    this.tasksObs.next(list);
  }
  remove(task: Task) {
    const list = this.tasksObs.getValue().filter(t => t !== task);
    this.tasksObs.next(list);
  }
  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksObs.getValue();
    this.tasksObs.next(list);
  }
  getTasksObs(): Observable<Array<Task>> {
    return this.tasksObs.asObservable();
  }
  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksObs.getValue());
  }
}
