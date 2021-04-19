import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

import { Employee } from '../../_models/Employee';
import { EditEmployeeComponent } from '../../edit-windows/edit-employee/edit-employee.component'
import { DatabaseService } from '../../_database/database.service'


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  searchForm: string;
  employees: Employee[] = [];
  // newEmployee: Employee = {
  //   Id: null,
  //   Name: '',
  //   ValueDocumentId: null,
  //   IdDepartment: null,
  //   JobName: '',
  //   BirthDay: '',
  //   Available: true
  // };

  constructor(
    private databaseService: DatabaseService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.databaseService.getAllEmployees().subscribe(employees => this.employees = employees)
  }

  onSearch(): void{
    this.databaseService.selectEmployees(this.searchForm).subscribe( employees => this.employees = employees);
  }

  openEdit(employee: Employee): void{
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      height: '400px',
      width: '300px',
      data: employee
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    })

  }

  addEmployee(): void{
    const dialogRef = this.dialog.open(EditEmployeeComponent,{
      height: '400px',
      width: '300px',
      data: null
    })

    // dialogRef.afterClosed().subscribe(result => this.newEmployee = result)

  }

  // deleteEmployee(Id: number): void{
  //   this.databaseService.deleteEmployee(Id).subscribe( employees => this.employees = employees);
  // }

}
