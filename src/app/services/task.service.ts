import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Task} from '../model/task';

@Injectable()
export class TaskService {
  private tasks: Array<Task> = [];
  private tasksDone: Array<Task> = [];
  private tasksObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasks = [
      {name: 'task1', created: new Date()},
      {name: 'task2', created: new Date()},
      {name: 'task3', created: new Date()},
      {name: 'task4', created: new Date()},
      {name: 'task5', created: new Date()},
    ];
    this.tasksObs.next(this.tasks);
  }

  add(task: Task) {
    this.tasks.push(task);
    this.tasksObs.next(this.tasks);
  }
  remove(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.tasksObs.next(this.tasks);
  }
  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }
  getTasksObs(): Observable<Array<Task>> {
    return this.tasksObs.asObservable();
  }
  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
