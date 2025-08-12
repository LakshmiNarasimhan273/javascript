const express = require("express");
const router = express.Router();
const {createTask, getTask, editTask, deleteTask} = require("../controller/taskController");

// http://localhost:8081/task/add

// router.(http methods) it will create a actual API with http routes
// based no the routes we need to callback our controller functions
router.post("/task/add", createTask);
router.get("/tasks", getTask);
router.put("/task/:id", editTask);
router.delete("/task/:id", deleteTask);


module.exports = router;