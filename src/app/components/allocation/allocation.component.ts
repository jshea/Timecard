import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Allocation } from '../../shared/classes/allocation';

/**
 * Note this implementation of a Material Table sets the dataSource in the ngOnInit() function.
 * This instance doesn't throw null errors like the WAMS component does! Is it a timing issue,
 * this uses fewer data items and loads faster than the WAMS?
 *
 * @export
 * @class AllocationComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
@Component({
  selector:    'tc-allocation',
  templateUrl: './allocation.component.html',
  styleUrls:  ['./allocation.component.css']
})
export class AllocationComponent implements OnInit, AfterViewInit {

  @Input() allocation: Allocation[];

  public displayedColumns = ['project', 'task', 'percentage'];
  public dataSource: MatTableDataSource<Allocation>;

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Allocation>(this.allocation);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    // Remove whitespace, convert to lowercase since MatTableDataSource does lowercase matches
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
