import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDashboardComponent } from './components/task-dashboard/task-dashboard.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddTaskComponent,
    TaskDashboardComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
