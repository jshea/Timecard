import { Accrual } from './accrual';
import { Allocation } from './allocation';
import { Leave } from './leave';
import { WAM } from './wam';

export class Timecard {
  userId:      string;
  userName:    string;
  weekEndDate: string;
  status:      string;

  accrual:     Accrual;
  allocation:  Allocation[] = [];
  wam:         WAM[] = [];

  constructor(userId: string, userName: string,
              weekEndDate: string, status: string,
              accrual: Accrual,
              alloc: Allocation[],
              leave: Leave[]) {
    this.userId = userId;
    this.userName = userName;
    this.weekEndDate = weekEndDate;
    this.status = status;
    this.accrual = accrual;
    this.allocation = alloc;
  }
}
