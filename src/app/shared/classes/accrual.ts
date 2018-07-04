export class Accrual {
    vacation:   number;
    sick:       number;
    personal:   number;

  constructor(vacation: number, sick: number, personal: number) {
    this.vacation = vacation;
    this.sick = sick;
    this.personal = personal;
  }
}
