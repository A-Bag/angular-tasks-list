import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input()
  tasks = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemoved = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  remove(task: string) {
    this.emitRemoved.emit(task);
  }

  done(task: string) {
    this.emitDone.emit(task);
  }

  getColor(): string {
    return this.tasks.length >= 5 ? 'red' : 'green';
  }
}
