import { Component, OnChanges, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import * as moment from 'moment';

import { WAM } from '../../shared/classes/wam';

/**
 * Note this implementation of a Material Table resets the dataSource in the ngOnChanges() function.
 * This instance will throw null errors! Is it a timing issue, this component uses more data items
 * that take longer to load then the Allocation component?
 *
 * @export
 * @class WamComponent
 * @implements {OnChanges}
 * @implements {OnInit}
 */
@Component({
  selector:    'tc-wam',
  templateUrl: './wam.component.html',
  styleUrls:  ['./wam.component.css']
})
export class WamComponent implements OnChanges, OnInit {
  @Input() wams: WAM[] = [];

  public displayedColumns = ['project', 'projectName', 'task', 'taskName', 'from', 'to'];
  // Initialize to an empty datasource so ngAfterViewInit() won't
  // error when wam data hasn't been passed yet.
  public dataSource: MatTableDataSource<WAM> = new MatTableDataSource<WAM>();

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wams'] && changes['wams'].currentValue) {
      this.dataSource = new MatTableDataSource<WAM>(this.wams);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }
  }

  ngOnInit() { }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
