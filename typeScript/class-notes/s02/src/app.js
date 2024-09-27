"use strict";
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");
let tasks = [];
addBtn.addEventListener("click", () => {
    const newTask = input.value.trim(); //"asdasd"
    if (newTask) {
        tasks.push({ task: newTask, status: 0 /* Status.Active */ });
        console.log(tasks);
        input.value = "";
    }
});
