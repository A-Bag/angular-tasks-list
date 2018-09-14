import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  tasks: Array<string> = [];
  tasksDone: Array<string> = [];

  add() {
    this.tasks.push(this.newTask);
    this.newTask = '';
    console.log(this.tasks);
  }
  remove(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
