import { Component, Inject ,OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DatabaseService } from 'src/app/_database/database.service';
import { Employee } from '../../_models/Employee';
import { Job } from '../../_models/Job';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  Jobs: Job[] = []

  constructor(
    private databaseService: DatabaseService,
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    console.log(this.data.Id);
    this.databaseService.getAllJobs().subscribe(Jobs => this.Jobs = Jobs)
  }
}
