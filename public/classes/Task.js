export class Task {
    constructor(t, i) {
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
