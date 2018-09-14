import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private tasks: Array<string> = [];
  private tasksDone: Array<string> = [];
  private tasksObs = new BehaviorSubject<Array<string>>(this.tasks);
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);

  constructor() {
    this.tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];
    this.tasksObs.next(this.tasks);
  }

  add(task: string) {
    this.tasks.push(task);
    this.tasksObs.next(this.tasks);
  }
  remove(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.tasksObs.next(this.tasks);
  }
  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }
  getTasksObs(): Observable<Array<string>> {
    return this.tasksObs.asObservable();
  }
  getTasksDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }
}
