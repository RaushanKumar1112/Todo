import { Task } from "./classes/Task.js";
import { TaskTemplate } from "./classes/TaskTemplate.js";
// import { Searchtemplate } from "./classes/SearchTemplate";
console.log("sdas");
const form = document.querySelector(".add-task");
const form1 = document.querySelector(".searchbar");
const input = document.querySelector("#enter");
const search = document.querySelector("#search");
const tag = document.querySelector(".list");
let index = 0, i = 0;
const tasks = [];
const ul = document.querySelector(".list");
const instance = new TaskTemplate(ul);
console.log(tasks);
// const val = new Searchtemplate();
function filter(items, search) {
    let searchedTask = [];
    items.forEach(item => {
        if (item.taskName === search) {
            searchedTask.push(item);
        }
    });
    return searchedTask;
}
function show(items, limit) {
    tag.innerHTML = '';
    for (let j = 0; j < items.length; j++) {
        // console.log(arr[j]);
        instance.render(items, j);
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskOne = new Task(input.value, index);
    tasks.push(taskOne);
    index++;
    show(tasks, index);
    input.value = "";
});
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let arr = filter(tasks, search.value);
    show(arr, arr.length);
});
