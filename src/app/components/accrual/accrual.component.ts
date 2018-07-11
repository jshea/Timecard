import { Component, OnInit, Input } from '@angular/core';

import { Accrual } from '../../shared/classes/accrual';

@Component({
  selector:    'tc-accrual',
  templateUrl: './accrual.component.html',
  styleUrls:  ['./accrual.component.css']
})
export class AccrualComponent implements OnInit {

  // Default values to Karma doesn't throw
  // Error: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'ng:///DynamicTestModule/AccrualComponent.ngfactory.js'
  @Input() weekEndDate: string = '1970-01-01';
  @Input() accrual: Accrual = new Accrual(0, 0, 0);

  constructor() { }

  ngOnInit() {  }

}
