const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const productRoutes = require("./routes/productRoutes");

let port = 8081;

app.use(express.json());
app.use(taskRoutes);
app.use(productRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
})

// model -> controller -> routes => index.js