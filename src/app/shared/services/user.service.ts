import { Injectable } from '@angular/core';

import { Accrual } from '../classes/accrual';
import { Allocation } from '../classes/allocation';
import { Leave } from '../classes/leave';
import { Timecard } from '../classes/timecard';
import { WAM } from '../classes/wam';

@Injectable()
export class UserService {

  private timecards: Timecard[] = [];
  private wams: WAM[] = [];

  constructor() {

    this.timecards = [
      new Timecard('fflintstone', 'Fred Flintstone', '2018-08-05', 'Incomplete',
        new Accrual(260.3, 456.7, 10),
        [ new Allocation('123456', 'A fun task', 10) ],
        [ new Leave('Vacation', 285.6), new Leave('Sick', 593), new Leave('Personal', 8) ],
      ),
      new Timecard('fflintstone', 'Fred Flintstone', '2018-08-12', 'Incomplete',
        new Accrual(260.3, 456.7, 10),
        [],
        []
      )
    ];

    this.wams =         [
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.01', 'Design',   '2018-01-15', '2019-06-24'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.02', 'Build',    '2018-01-20', '2019-06-24'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.03', 'Test',     '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.04', 'Rework',   '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.05', 'Package',  '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.06', 'Ship',     '2018-03-15', '2019-09-30'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.07', 'Support',  '2018-03-15', '2019-09-30'),
      new WAM('fflintstone', 'CORP',   'Coporate',  '03.02.01', 'Travel',   '2017-01-01', '2020-12-31'),
      new WAM('fflintstone', 'CORP',   'Coporate',  '03.02.02', 'Training', '2017-01-01', '2020-12-31')
    ];

   }


  public getTimecard(): Timecard {
    return this.timecards[0];
  }


  public getWams(): WAM[] {
    return this.wams;
  }

}
