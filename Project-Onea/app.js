// Get Node Modules
const path = require("path");

// Get NPM modules
const express = require("express");
// const res = require("express/lib/response");

// App modules

const fm = require("./filemgr");

// Create the express http server
const app = express();

// Define Static and Middleware
app.use(express.static("./Client"));

app.get("/api",async (req,res)=>{
    res.send(await fm.ReadData());
})

// Page not found route
app.all("*",(req,res)=>{
    res.status(404).send("<h1>Page Not Found....</h1>");
})


const appName = "My List";
const port = 5000;
app.listen(port,()=>{
    console.log(`App ${appName} is running on port ${port}`);

})
