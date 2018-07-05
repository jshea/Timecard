import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/classes/user';
import { MatTableDataSource } from '@angular/material';

import { UserService } from '../../shared/services/user.service';
import { Timecard } from '../../shared/classes/timecard';
import { WAM } from '../../shared/classes/wam';

@Component({
  selector:    'tc-timecard-input',
  templateUrl: './timecard-input.component.html',
  styleUrls:  ['./timecard-input.component.css']
})
export class TimecardInputComponent implements OnInit {
  @Input() timecard: Timecard;
  @Input() wams: WAM[];

  public dataSource: MatTableDataSource<Timecard>;

  constructor() { }

  ngOnInit() {  }

}
