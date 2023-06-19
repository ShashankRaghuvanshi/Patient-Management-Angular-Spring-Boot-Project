import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
  }

  email: String="";
  pass: String="";

  authenticate()
  {
    this.service.userAuthenticate(this.email,this.pass);
  }
}
