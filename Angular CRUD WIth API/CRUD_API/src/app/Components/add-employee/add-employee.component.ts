import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmploye : employee = {
    id :'',
    name :'',
    email : '',
    phone : 0,
    salary : 0,
    department: ''
  }
  constructor(private empService: EmployeesService, private router: Router) {

  }

  ngOnInit(): void {

  }

  addEmployee(){
    this.empService.addEmployee(this.addEmploye)
    .subscribe({
      next:(employe) =>{
        this.router.navigate(['employees']);
      },
      error:(erres)=>{
        console.log(erres);
      }
    });
  }

}
