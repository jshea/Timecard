export class Allocation {
    project:    string;
    task:       string;
    percentage: number;

  constructor(proj: string, task: string, pct: number) {
    this.project = proj;
    this.task = task;
    this.percentage = pct;
  }
}
