const tasksModel = require("../model/taskModel");

// GET ALL API
const getalltask = (req, res) => {
    res.status(200).json(tasksModel); // 200 - Success
}

// GET BY ID
const gettaskbyId = (req, res) => {
    const id = parseInt(req.params.id);

    // Condition to find the given is exist or not
    const task = tasksModel.find(data => data.id === id);

    if(task){
        res.status(200).json(task); // 200 - Success
    }else{
        res.status(404).json({message: "Task not found"}); // 404 - Not Found
    }
}

// CREATE
const createTask = (req, res) => {
    const {title, description, status} = req.body;

    if(!title || !description || !status){
        return res.status(400).json({message: "All fields are required"}); // 400 - Bad Request
    }

    const newTask = {
        id: tasksModel.length ? tasksModel[tasksModel.length - 1].id + 1 : 1,
        title,
        description,
        status
    }
    tasksModel.push(newTask);
    res.status(201).json({message: "Task created", newTask}); // 201 - Created
}

// EDIT(UPDATE)
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, description, status} = req.body;
    const task = tasksModel.find(data => data.id === id);

    // Update logic
    if(task){
        task.title = title ?? task.title;
        task.description = description ?? task.description;
        task.status = status ?? task.status;

        res.status(200).json(task);
    }else{
        res.status(404).json({message: "Task not found"});
    }
}

// DELETE
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasksModel.findIndex(data => data.id === id);

    // Condition to delete the task
    if(index !== -1){
        const deletedTask = tasksModel.splice(index, 1);
        res.status(200).json(deletedTask[0]);
    }else{
        res.status(404).json({message: "Task not found"});
    }
}

module.exports = {getalltask, gettaskbyId, createTask, updateTask, deleteTask};