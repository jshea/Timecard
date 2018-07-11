import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Timecard } from '../classes/timecard';
import { Accrual } from '../classes/accrual';
import { Allocation } from '../classes/allocation';
import { WAM } from '../classes/wam';

/**
 * https://github.com/angular/in-memory-web-api
 *
 * @export
 * @class InMemoryDbServiceService
 */
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  /**
   * Called on the first HTTP request and when it
   * receives a resetdb command.
   *
   * @returns
   * @memberof InMemoryDbServiceService
   */
  createDb() {

    const timecards = [
      new Timecard('fflintstone', 'Fred Flintstone', '2018-08-05', 'Incomplete',
        new Accrual(260.3, 456.7, 10),
        [ new Allocation('123456', 'A fun task', 10) ]
      ),
      new Timecard('fflintstone', 'Fred Flintstone', '2018-08-12', 'Incomplete',
        new Accrual(260.3, 456.7, 10),
        []
      )
    ];

    const wams = [
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.01', 'Design',   '2018-01-15', '2019-06-24'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.02', 'Build',    '2018-01-20', '2019-06-24'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.03', 'Test',     '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.04', 'Rework',   '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.05', 'Package',  '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.06', 'Ship',     '2018-03-15', '2019-09-30'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.07', 'Support',  '2018-03-15', '2019-09-30'),
      new WAM('fflintstone', 'CORP',   'Coporate',              '03.02.01', 'Travel',   '2017-01-01', '2020-12-31'),
      new WAM('fflintstone', 'CORP',   'Coporate',              '03.02.02', 'Training', '2017-01-01', '2020-12-31')
    ];

    return { timecards, wams };
  }
    // const heroes = [
    //   { id: 0, name: 'Zero' },
    //   { id: 11, name: 'Mr. Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'RubberMan' },
    //   { id: 17, name: 'Dynama' },
    //   { id: 18, name: 'Dr IQ' },
    //   { id: 19, name: 'Magma' },
    //   { id: 20, name: 'Tornado' }
    // ];
    // return { heroes };

}
