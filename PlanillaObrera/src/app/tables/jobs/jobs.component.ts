import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

import { Job } from '../../_models/Job';
import { DatabaseService } from '../../_database/database.service';
import { EditJobComponent } from 'src/app/edit-windows/edit-job/edit-job.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  Jobs: Job[] = []

  constructor(
    private databaseService: DatabaseService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.databaseService.getAllJobs().subscribe(Jobs => this.Jobs = Jobs);
  }

  openEdit(Job: Job): void{
    const dialogRef = this.dialog.open(EditJobComponent, {
      height: '400px',
      width: '300px',
      data: Job
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    })
  }
}
