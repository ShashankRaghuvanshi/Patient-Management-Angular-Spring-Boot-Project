import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8082/api/v1/employees";

  emailId = "Shashank@gmail.com";
  password = "12345";

  userAuthenticate(email: String, pass: String){
    console.log(email,pass)
    if(this.emailId == email && this.password == pass)
    {
      //alert("Login Successfully");
      this.router.navigateByUrl("home");
    }
    else{
      alert("Incorrect Id or Password");
    }
  }

  constructor(private httpClient: HttpClient , private router: Router) {
    
   }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
