import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

import { Employee } from '../../_models/Employee';
import { EditEmployeeComponent } from '../../edit-windows/edit-employee/edit-employee.component'
import { DatabaseService } from '../../_database/database.service'
import { Job } from 'src/app/_models/Job';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  searchForm: string;
  employees: Employee[] = [];
  jobs: Job[] = [];

  constructor(
    private databaseService: DatabaseService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.databaseService.getAllEmployees().subscribe(employees => this.employees = employees)
    this.databaseService.getAllJobs().subscribe(jobs => this.jobs = jobs)

  }

  findJob(Id: number){
    return this.jobs.find(job => job.Id===Id).NameJob
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
    let newEmployee: Employee = {
      Id: null,
      Name: '',
      IdTypeDoc: null,
      IdDepartment: null,
      IdJob: null,
      BirthDay: '',
      Active: true,
      ValueDocIdentity: null,
    };
    const dialogRef = this.dialog.open(EditEmployeeComponent,{
      height: '400px',
      width: '300px',
      data: newEmployee
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result!==undefined){
        this.databaseService.addEmployee(result).subscribe()
        //window.location.reload();
      }else{
        console.log("No data")
      }
      
    })

  }

  // deleteEmployee(Id: number): void{
  //   this.databaseService.deleteEmployee(Id).subscribe( employees => this.employees = employees);
  // }

}
