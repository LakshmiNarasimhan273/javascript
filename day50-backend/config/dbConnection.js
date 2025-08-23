const mongoose = require("mongoose");

// Connection function
async function dbConnection() {
    try {
        // connect function will make a connection between our backend to the database
        // Compass connection
        // await mongoose.connect("mongodb://localhost:27017/B35-first-class"); 
        // ---
        // Atlas Connection
        await mongoose.connect("mongodb+srv://lakshminarasimhan511:narasimhan123@tasks.hotmi6n.mongodb.net/?retryWrites=true&w=majority&appName=tasks", {
            ssl: true, // ssl - Secure Socket Layer
            tlsAllowInvalidCertificates: false // Transport layer
        });
        console.log("Database connection established");
    } catch {
        console.log("Failed to connect Database");
    }
}

module.exports = dbConnection;