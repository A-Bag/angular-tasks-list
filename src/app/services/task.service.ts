import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Task} from '../model/task';
import {HttpService} from './http.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class TaskService {
  private tasksObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService, private angularFire: AngularFireAuth) {
    this.angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.tasksObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getTasks().subscribe(tasks => this.tasksObs.next(tasks));
  }

  add(tasks: Task[]) {
    const list = this.tasksObs.getValue().concat(tasks);
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
