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
    this.printEmployees();
  }

  async getEmployees(){
    //no funciona porque .toPrommise no es un observable
    // -->database.service.ts
    //this.employees = await this.databaseService.getAllEmployees();
    
    //find how to get data from the observables
    this.databaseService.getAllEmployees().subscribe(employees => this.employees = employees);

  }
  printEmployees():void{
    for (let employee in this.employees){
      console.dir(employee);
    }
  }

  

}
