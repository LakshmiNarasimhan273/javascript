
let tasks = [
    {id: 1, title: "Frontend development", description: 'Complete the all pending designs for every component', status: 'In-progress'},
    {id: 2, title: "Backend development", description: 'Complete the all pending designs for every modules', status: 'Completed'},
]

// create suitable http method -> POST
const createTask = (req, res) => {
        res.json({message: "Task created successfully"});
}

// function with req and res callback function
// when the function executes the res.json method will send the message as output
const getTask = (req, res) => {
    res.json({message: "All task retrived successfully", data: tasks});
}

const editTask = (req, res) => {
    res.json({message: `Task updated for the id of - ${req.params.id}`});
}

const deleteTask = (req, res) => {
    res.json({message: `Task deleted for the id of - ${req.params.id}`});
}

module.exports = {createTask, getTask, editTask, deleteTask};