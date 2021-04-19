import { Component, Inject ,OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DatabaseService } from 'src/app/_database/database.service';
import { Job } from '../../_models/Job';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  constructor(
    private databaseService: DatabaseService,
    public dialogRef: MatDialogRef<EditJobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
