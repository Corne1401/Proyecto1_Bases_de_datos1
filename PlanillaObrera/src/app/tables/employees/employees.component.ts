import { Component, OnInit } from '@angular/core';

import { Employee } from '../../_models/Employee';
import { DatabaseService } from '../../_database/database.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  searchForm: string;
  employees: Employee[] = [];

  constructor(
    private databaseService: DatabaseService
    ) { }

  ngOnInit(): void {
    this.databaseService.getAllEmployees().subscribe(employees => this.employees = employees)
  }

  onSearch(): void{
    this.databaseService.selectEmployees(this.searchForm).subscribe( employees => this.employees = employees);
  }
}
