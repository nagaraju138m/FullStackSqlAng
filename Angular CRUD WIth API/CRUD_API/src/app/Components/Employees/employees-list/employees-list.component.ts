import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employee: employee[] = [];
  searchtexh! :string;

  constructor(private empService : EmployeesService){

  }


  ngOnInit(): void {
    this.empService.getAllEmployees()
    .subscribe({
      next:(employees) => {
        this.employee = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
