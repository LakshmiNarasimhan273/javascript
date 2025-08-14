const express = require("express");
const router = express.Router();

const {getalltask, gettaskbyId, createTask, updateTask, deleteTask} = require("../controller/taskController");

router.get("/tasks", getalltask);
router.get("/tasks/:id", gettaskbyId);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;