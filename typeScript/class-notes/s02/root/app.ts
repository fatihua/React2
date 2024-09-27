const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addTodoBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;


// {
//     task:"asd",
//     status:0-1
// }

const enum Status {
    Active,//0
    Completed//1
}

interface ITask {
    task: string,
    status: Status
}

let tasks:ITask[] = []



addBtn.addEventListener("click",()=>{
    const newTask = input.value.trim() //"asdasd"

    if(newTask){
      tasks.push({task:newTask,status:Status.Active})
      console.log(tasks)  
      input.value=""
    }
})