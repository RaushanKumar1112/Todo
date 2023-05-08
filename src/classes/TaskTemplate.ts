import { Task } from "./Task.js";

export class TaskTemplate {
  constructor(private container: HTMLUListElement) {}

  render(tasks: Task[], index: number) {
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
    button1.addEventListener("click", (e: Event) => {
      tasks.forEach((item) => {
        if (item.index == parseInt(button2.className)) {
          // const defaultName = "John Doe";
          const userInput = prompt(
            "Please enter your updated task:",
            p.innerText
          );
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
    button2.addEventListener("click", (e: Event) => {
      tasks.forEach((item) => {
        if (item.index == parseInt(button2.className)) {
          const liToRemove = document.getElementsByClassName(
            button2.className
          )[0];
          liToRemove.parentNode?.removeChild(liToRemove);
        }
      });
    });
    div.append(button2);

    li.append(div);

    this.container.append(li);
  }
}
