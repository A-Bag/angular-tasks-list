import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  tasks: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksObs().subscribe((tasks: Array<Task>) => this.tasks = tasks);
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  done(task: Task) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasks.length >= 5 ? 'red' : 'green';
  }
}
