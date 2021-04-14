import { Component, OnInit } from '@angular/core';

import { Employee } from '../../_models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees: Employee[] = [
    {Id: 0, Name: "Daniel", ValueDocumentId: 0, IdDepartment: 4, JobName: "Programmer", BirthDay: "14-2-2001", Available: true},
    {Id: 1, Name: "Sebastian", ValueDocumentId: 5, IdDepartment: 9, JobName: "Programmer", BirthDay: "27-11-2001", Available: true},
    {Id: 2, Name: "Kensilex", ValueDocumentId: 2, IdDepartment: 1, JobName: "Programmer", BirthDay: "17-4-2001", Available: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
