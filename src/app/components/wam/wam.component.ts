import { Component, OnChanges, OnInit, Input, ViewChild, AfterViewInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import * as moment from 'moment';

import { WAM } from '../../shared/classes/wam';

@Component({
  selector:    'tc-wam',
  templateUrl: './wam.component.html',
  styleUrls:  ['./wam.component.css']
})
export class WamComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() wams: WAM[] = [];

  public displayedColumns = ['project', 'projectName', 'task', 'taskName', 'from', 'to'];
  // Initialize to an empty datasource so ngAfterViewInit() won't error when wam data
  // hasn't been passed yet.
  public dataSource: MatTableDataSource<WAM> = new MatTableDataSource<WAM>();

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wams'] && changes['wams'].currentValue) {
      this.dataSource = new MatTableDataSource<WAM>(this.wams);
    }
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();         // Remove whitespace
    filterValue = filterValue.toLowerCase();  // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
