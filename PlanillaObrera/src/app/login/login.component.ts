import { Component, OnInit } from '@angular/core';

import { Administrator } from '../Interfaces/Administrator';
import { DatabaseService } from '../_database/database.service';
import { ThrowStmt } from '@angular/compiler';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminClient: Administrator = {
    UserName: '',
    Password: ''
  }
  adminServer: Administrator[] = [];

  constructor(private databaseService: DatabaseService) { }
  

  ngOnInit(): void {
    
  }

  onClickSubmitBtn(){

  }

  async getEmployees(){
    //this.databaseService.getAllEmployees().subscribe(employees => this.employees = employees);
  }

}
