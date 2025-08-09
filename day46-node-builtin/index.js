// File system - (fs)
const fs = require("fs");
const os = require("os");

// Step - 1 (File creation)

// using fs module and start with writeFile function
// it holds totally 3 parameters
// 1 filename
// 2 string data that should be written in the file
// 3 callback function to check incase of any errors
fs.writeFile("report.txt", "Fullstack web development, weekly report", (err) => {
    if(err){  // condition for checking any errors
        console.error(err);
        return;
    }
    console.log("File written successfully");    
});

// Step - 2 (File reading)

// using fs module and start with readFile function
// it holds totally 3 parameters
// 1 filename
// 2 formatting (utf - unicode transformation format (or) universal text format) to change the buffer data into string
// 3 callback function to check incase of any errors or else print the file data
fs.readFile("report.txt", "utf8", (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

// OS Module
// 1 system platform
console.log("System platform-", os.platform());
console.log("OS Type", os.type());
console.log("OS Release", os.release());
console.log("OS Version", os.version());

// 2 System architecture
console.log("Architecture", os.arch());

// 3 System memory
console.log("Total memory", (os.totalmem() / (1024 ** 3)).toFixed(2));

// 4 Free system memory (current)
console.log("Free memory (current)", (os.freemem() / (1024 ** 3)).toFixed(2));

// 5 System uptime
console.log("Display uptime", (os.uptime() / 3600).toFixed(2));

// 6 CPU details
console.log("CPU info", os.cpus());

// 7 home directory
console.log("Home directory", os.homedir());

// 8 Hostname
console.log("Hostname", os.hostname());

// network accessing
console.log("Network interferances", os.networkInterfaces());
