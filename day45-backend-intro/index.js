const express = require("express");
const app = express(); // general term to swap express library to app variable

// Basic server creation
let port = 8081; // preferrable backend application port numbers:- 8081 , 8080 , 3001 , 3000

// basic get method
app.get("/dashboard", (req, res) => {
    res.send("Welcome back");
})

// Server point
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})