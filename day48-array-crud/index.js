const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");

let port = 8081;

app.use(express.json());
app.use(taskRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
})

// model -> controller -> routes => index.js