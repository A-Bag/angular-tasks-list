import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import {TaskService} from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth/';

const config = {
  apiKey: 'AIzaSyCqQ1WoWkRFB1scNTI7tF9OWNaRORZ42vo',
  authDomain: 'task-list-c6a76.firebaseapp.com',
  databaseURL: 'https://task-list-c6a76.firebaseio.com',
  projectId: 'task-list-c6a76',
  storageBucket: 'task-list-c6a76.appspot.com',
  messagingSenderId: '935211554173'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TaskService, HttpService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
