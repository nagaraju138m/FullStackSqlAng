import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  addEmploye : employee = {
    id :'',
    name :'',
    email : '',
    phone : 0,
    salary : 0,
    department: ''
  }
  constructor(private router:Router, private empService:EmployeesService, private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=> {
        const id= params.get('id');

        if(id){
          this.empService.getEmployee(id).subscribe({
            next:(response)=>{
              this.addEmploye = response;
              console.log(response);
            }
          });
        }
      }
    })
  }
  updateEmployee(){
    this.empService.updateEmployee(this.addEmploye.id, this.addEmploye).subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    });
  }

}
