import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  tasksDone = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksDoneObs().subscribe((tasks: Array<string>) => this.tasksDone = tasks);
  }

  ngOnInit() {
  }

}
