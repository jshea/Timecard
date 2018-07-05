import { Component, OnInit, Input } from '@angular/core';

import { Accrual } from '../../shared/classes/accrual';

@Component({
  selector:    'tc-accrual',
  templateUrl: './accrual.component.html',
  styleUrls:  ['./accrual.component.css']
})
export class AccrualComponent implements OnInit {

  @Input() weekEndDate: string;
  @Input() accrual: Accrual;

  constructor() { }

  ngOnInit() {  }

}
