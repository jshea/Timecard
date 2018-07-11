import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './shared/services/user.service';

import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { Timecard } from './shared/classes/timecard';
import { WAM } from './shared/classes/wam';

@Component({
  selector: 'tc-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {
  public timecard: Timecard = null;
  public wams: WAM[] = null;
  public feature: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private userService: UserService) {}

  ngOnInit() {
    // Load up our data
    // this.timecard = this.userService.getTimecards();
    this.userService.getTimecards().subscribe(
      (timecards: Timecard[]) => {
        this.timecard = timecards[0];
      }
    );

    this.userService.getWams().subscribe(
      (wams: WAM[]) => {
        this.wams = wams;
      }
    );

    this.feature = 'timecard';                        // Default to timecard display
  }

  public onListItemClick(feature: string): void {
    this.feature = feature;
  }

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
