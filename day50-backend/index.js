const express = require("express");
const app = express();
const dbConnection = require("./config/dbConnection");
const productRoutes = require("./routes/ProductRoutes");

let port = 8081;

app.use(express.json());
app.use(productRoutes);

// Backend Architecture
// Config -> Model -> Controller -> (middleware) -> Routes -> index.js

dbConnection();
app.listen(port, () => {
    console.log(`Server running on ${port}`);    
});