const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

let port = 8081;

// Connectivity -> first controller preparation then its -> connected to routes -> at finally routes is used inside the index.js

// implementing app.use method to execute the created routes
app.use(taskRoutes);
app.use(userRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})

// frontend -> designs (components) -> logic (redux) * Frontend patterns
// backend -> controller (function) -> routes (http routes) * Backend patterns