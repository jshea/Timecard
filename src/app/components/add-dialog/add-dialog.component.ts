import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../../shared/classes/user';

@Component({
  selector:    'tc-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls:  ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<AddDialogComponent>) { }

  ngOnInit() {
  }


  save() {
    // this.userService.addUser(this.user).then(user => {
      this.dialogRef.close('Save happened');
    // });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
