export class Task {
  taskName: string;
  index: number;
  constructor(t: string, i: number) {
    this.index = i;
    this.taskName = t;
  }
  compiledTask() {
    const obj = {
      taskName: this.taskName,
      index: this.index,
    };

    return obj;
  }
}
