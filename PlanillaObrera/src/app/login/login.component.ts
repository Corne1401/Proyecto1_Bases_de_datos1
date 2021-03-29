import { Component, OnInit } from '@angular/core';

import { Employee } from '../Interfaces/employee';
import { DatabaseService } from '../database.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  employees: Employee[] = [];
  
  constructor(private databaseService: DatabaseService) { }
  

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees(){
    //To get data from database, match interface names with table names
    this.databaseService.getAllEmployees().subscribe(employees => this.employees = employees);
  }

}
