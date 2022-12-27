import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  getAllEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(this.baseApiUrl + '/api/Employees')
  }

  addEmployee(addEmploye:employee): Observable<employee> {
    addEmploye.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<employee>(this.baseApiUrl + '/api/employees',
    addEmploye);
  }
  getEmployee(id:string){
    return this.http.get<employee>(this.baseApiUrl + '/api/employees/'+ id);
  }
  updateEmployee(id:string, updatedEmployee:employee):Observable<employee>{
    return this.http.put<employee>(this.baseApiUrl+'/api/employees/'+ id, updatedEmployee);
  }
  deleteEmployee(id: string):Observable<employee>{
    return this.http.delete<employee>(this.baseApiUrl + '/api/employees/' + id);

  }

}
