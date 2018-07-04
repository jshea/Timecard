import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

@Component({
  selector: 'tc-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.css']
})
export class TimecardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {}

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, { width: '450px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result) {
        this.openSnackBar('XXX added', 'Navigate')
            .onAction().subscribe(() => {
              // this.router.navigate(['/', result.id]);
            });
      }
    });
  }

  private openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
