import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  tasks = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksObs().subscribe((tasks: Array<string>) => this.tasks = tasks);
  }

  ngOnInit() {
  }

  remove(task: string) {
    this.taskService.remove(task);
  }

  done(task: string) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasks.length >= 5 ? 'red' : 'green';
  }
}
