import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void {
    throw new Error('Method not implemented');
  }

  add(task: string) {
    this.tasks.push(task);
  }
  remove(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
