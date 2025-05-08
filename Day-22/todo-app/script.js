function addTask(){
    const taskValue = document.getElementById("taskInput").value;

    if(taskValue.trim() === ""){
        window.alert("Please enter a task");
        return;
    }

    // DOM Sub-properties
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerText = taskValue;

    // DOM Sub-property
    document.getElementById("taskList").appendChild(newTask);

    const allTasks = document.getElementsByClassName("task");
    for(let i = 0; i < allTasks.length; i++){
        allTasks[i].style.backgroundColor = "#e6ffe6";
    }

    const container = document.querySelector(".todo-container");
    container.style.border = "2px solid #4caf50";

    // Clear input
    document.getElementById("taskInput").value = "";
}