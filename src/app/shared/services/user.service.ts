import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError, map, retry } from 'rxjs/operators';

import { Accrual } from '../classes/accrual';
import { Allocation } from '../classes/allocation';
import { Timecard } from '../classes/timecard';
import { WAM } from '../classes/wam';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
const urlTimecard = 'api/timecards/';
const urlWams     = 'api/wams/';

/**
 * https://github.com/angular/in-memory-web-api/tree/master/src/app
 * https://angular.io/guide/http
 *
 * @export
 * @class UserService
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private timecards: Timecard[] = [];
  private wams: WAM[] = [];

  constructor(private http: HttpClient) {}

  /*   Timecards   */

  getTimecards (): Observable<Timecard[]> {
    return this.http.get<Timecard[]>(urlTimecard)
      .pipe(
        retry(3),   // retry a failed request up to 3 times
        // tap(data => console.log(data)), // debugging - see results in the console
        catchError(this.handleError)
      );
  }


  // This get-by-id will 404 when id not found
  getTimecard(id: string): Observable<Timecard> {
    const url = urlTimecard + id;

    return this.http.get<Timecard>(url).pipe(
      catchError(this.handleError)
    );
  }


  // This get-by-id does not 404; returns undefined when id not found
  // getTimecard<Data>(id: number): Observable<Timecard> {
  //   const url = `${this._urlTimecard}/?id=${id}`;
  //   return this.http.get<Timecard[]>(url)
  //     .map(timecards => timecards[0] as Timecard)
  //     .catch(this.handleError);
  // }
  addTimecard (timecard: Timecard): Observable<Timecard> {
    return this.http.post<Timecard>(urlTimecard, timecard, headers)
      .pipe(
        catchError(this.handleError)
      );
  }


  deleteTimecard (timecard: Timecard): Observable<Timecard> {
    const url = urlTimecard + timecard.id;

    return this.http.delete<Timecard>(url, headers)
      .pipe(
        catchError(this.handleError)
      );
  }


  searchTimecards(term: string): Observable<Timecard[]> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Timecard[]>(urlTimecard, options)
      .pipe(
        catchError(this.handleError)
      );
  }


  updateTimecard (timecard: Timecard): Observable<null | Timecard> {
    return this.http.put<Timecard>(urlTimecard, timecard, headers)
      .pipe(
        catchError(this.handleError)
      );
  }

  /*   WAMs   */

  getWams (): Observable<WAM[]> {
    return this.http.get<WAM[]>(urlWams)
      .pipe(
    // tap(data => console.log(data)), // debugging - see results in the console
        catchError(this.handleError)
      );
  }


  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }


  //   this.timecards = [
  //     new Timecard('fflintstone', 'Fred Flintstone', '2018-08-05', 'Incomplete',
  //       new Accrual(260.3, 456.7, 10),
  //       [ new Allocation('123456', 'A fun task', 10) ],
  //       [ new Leave('Vacation', 285.6), new Leave('Sick', 593), new Leave('Personal', 8) ],
  //     ),
  //     new Timecard('fflintstone', 'Fred Flintstone', '2018-08-12', 'Incomplete',
  //       new Accrual(260.3, 456.7, 10),
  //       [],
  //       []
  //     )
  //   ];

  //   this.wams =         [
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.01', 'Design',   '2018-01-15', '2019-06-24'),
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.02', 'Build',    '2018-01-20', '2019-06-24'),
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.03', 'Test',     '2018-02-15', '2019-07-31'),
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.04', 'Rework',   '2018-02-15', '2019-07-31'),
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.05', 'Package',  '2018-02-15', '2019-07-31'),
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.06', 'Ship',     '2018-03-15', '2019-09-30'),
  //     new WAM('fflintstone', '123456', 'Double secret project', '01.02.07', 'Support',  '2018-03-15', '2019-09-30'),
  //     new WAM('fflintstone', 'CORP',   'Coporate',  '03.02.01', 'Travel',   '2017-01-01', '2020-12-31'),
  //     new WAM('fflintstone', 'CORP',   'Coporate',  '03.02.02', 'Training', '2017-01-01', '2020-12-31')
  //   ];

  //  }


  // public getTimecard(): Timecard {
  //   return this.timecards[0];
  // }


  // public getWams(): WAM[] {
  //   return this.wams;
  // }

}
