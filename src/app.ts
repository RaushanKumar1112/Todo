import { Task } from "./classes/Task.js";
import { TaskTemplate } from "./classes/TaskTemplate.js";
// import { Searchtemplate } from "./classes/SearchTemplate";
console.log("sdas");
const form = document.querySelector(".add-task") as HTMLSelectElement;
const form1 = document.querySelector(".searchbar") as HTMLSelectElement;
const input = document.querySelector("#enter") as HTMLSelectElement;
const search = document.querySelector("#search") as HTMLSelectElement;
const tag = document.querySelector(".list") as HTMLSelectElement;
let index = 0,i=0;
const tasks: Task[] = [];
const ul = document.querySelector(".list") as HTMLUListElement;
const instance = new TaskTemplate(ul);
console.log(tasks)
// const val = new Searchtemplate();
function filter(items: Task[], search: String): Task[] {
  let searchedTask: Task[] = [];
  items.forEach(item => {
    if (item.taskName === search) {
      searchedTask.push(item);
    }
  })
  return searchedTask;
}
function show(items: Task[],limit:number) {
  tag.innerHTML = '';
  for (let j = 0; j < items.length; j++){
    // console.log(arr[j]);
    instance.render(items, j);
  }
} 
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let taskOne = new Task(input.value, index);
  tasks.push(taskOne);
  index++;
  show(tasks,index);
  input.value = "";
});
form1.addEventListener("submit", (e: Event) => {
  e.preventDefault(); 
  
  let arr: Task[] = filter(tasks, search.value);
  show(arr,arr.length);

});