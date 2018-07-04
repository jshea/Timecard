export class WAM {
  userId:       string;
  project:      string;
  projectName:  string;
  task:         string;
  taskName:     string;
  from:         string;
  to:           string;

  constructor(userId: string,
              proj: string, projName: string,
              task: string, taskName: string,
              from: string, to: string) {
    this.userId = userId;
    this.project = proj;
    this.projectName = projName;
    this.task = task;
    this.taskName = taskName;
    this.from = from;
    this.to = to;
  }

}
