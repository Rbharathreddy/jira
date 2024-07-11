import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDashboardComponent } from './components/task-dashboard/task-dashboard.component';
const routes: Routes = [

  { path: '', component: TaskDashboardComponent },
  { path: 'Dashboard', component: TaskDashboardComponent },
  { path: 'Add-Task/:id', component: AddTaskComponent },
  { path: 'Edit-Task/:id', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
