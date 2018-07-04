import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';


/**
 * This pipe takes a string in ISO 8601 date format and returns a formatted date.
 *
 * Here as an example - currently using builtin date:'shortDate' pipe.
 *
 * @export
 * @class TcDatePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'tcDate'
})
export class TcDatePipe implements PipeTransform {
  transform(value: string, showTimestamp: boolean): string {

    // Nulls & undefined are treated as an empty date
    if (!value) {
      return '';
    }
    else if (typeof value === 'string' && moment(value, moment.ISO_8601).isValid()) {
      if (showTimestamp) {
        return moment(value).format('M/D/YY, h:mm:ss a');
      }
      else {
        return moment(value).format('M/D/YY');
      }
    }

    // Invalid input (string that's not a date...)
    else {
      throw new Error('Invalid input, a string containing an ISO 8601 date was expected');
    }

  }

}
