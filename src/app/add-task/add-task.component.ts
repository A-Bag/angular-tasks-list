import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../model/task';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  add() {
    const tasksList = this.createTaskList();
    this.taskService.add(tasksList);
    this.addForm = this.initForm();
  }

  createTaskList(): Task[] {
    const tasksList = <Task[]>[];
    const tasksArr = <[string]>this.addForm.get('taskName').value;
    tasksArr.forEach(taskName => {
      tasksList.push({name: taskName, created: new Date().toLocaleString(), isDone: false});
    });
    return tasksList;
  }

  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

}
