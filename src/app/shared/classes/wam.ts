export class WAM {
  id:           string;    // required by InMemoryDbService
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
    this.id = userId;               // For InMemoryDbService
    this.userId = userId;
    this.project = proj;
    this.projectName = projName;
    this.task = task;
    this.taskName = taskName;
    this.from = from;
    this.to = to;
  }

}
