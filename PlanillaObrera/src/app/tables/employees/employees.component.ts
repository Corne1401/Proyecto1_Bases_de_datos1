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
}
