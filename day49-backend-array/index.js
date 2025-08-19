const express = require("express");
const app = express();

const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");

let port = 8080;

app.use(express.json());

app.use("/auth", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
})