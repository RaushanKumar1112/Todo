export class TaskTemplate {
    constructor(container) {
        this.container = container;
    }
    render(tasks, index) {
        const li = document.createElement("li");
        li.className = String(index);
        const p = document.createElement("p");
        p.innerText = tasks[index].taskName;
        li.append(p);
        const div = document.createElement("div");
        div.className = "buts";
        const button1 = document.createElement("button");
        button1.innerText = "Update";
        button1.className = String(index);
        button1.addEventListener("click", (e) => {
            tasks.forEach((item) => {
                if (item.index == parseInt(button2.className)) {
                    // const defaultName = "John Doe";
                    const userInput = prompt("Please enter your updated task:", p.innerText);
                    if (userInput !== null) {
                        p.innerText = userInput;
                    }
                }
            });
        });
        div.append(button1);
        const button2 = document.createElement("button");
        button2.innerText = "Delete";
        button2.className = String(index);
        button2.addEventListener("click", (e) => {
            tasks.forEach((item) => {
                var _a;
                if (item.index == parseInt(button2.className)) {
                    const liToRemove = document.getElementsByClassName(button2.className)[0];
                    (_a = liToRemove.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(liToRemove);
                }
            });
        });
        div.append(button2);
        li.append(div);
        this.container.append(li);
    }
}
