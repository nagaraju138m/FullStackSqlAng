import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';

const routes: Routes = [

  {
    path:'employees',
    component : EmployeesListComponent
  },
  {
    path:'employees/add',
    component : AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component : EditEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
