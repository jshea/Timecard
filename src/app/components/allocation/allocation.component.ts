import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Allocation } from '../../shared/classes/allocation';

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
    filterValue = filterValue.trim();         // Remove whitespace
    filterValue = filterValue.toLowerCase();  // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
