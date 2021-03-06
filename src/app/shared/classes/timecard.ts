import { Accrual } from './accrual';
import { Allocation } from './allocation';
import { WAM } from './wam';

export class Timecard {
  id:          string;    // required by InMemoryDbService
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
              alloc: Allocation[]) {
    this.id = weekEndDate;          // For InMemoryDbService
    this.userId = userId;
    this.userName = userName;
    this.weekEndDate = weekEndDate;
    this.status = status;
    this.accrual = accrual;
    this.allocation = alloc;
  }
}
