const express = require("express");
const myCustomRoutes = require('./routes/userInput');
const foodQuery = require('./routes/foodQuery');

// Load Express
const app = express()
const port = 3000;

// Routes in /routes/
app.use("/userInput/", myCustomRoutes);
app.use("/findFood/", foodQuery);

// Routes to default 
app.get("/", (req,res) => { 
  res.send("Hello world!");
});

// allows access to public folder
app.use(express.static("public"));

// run the server
app.listen(port, () => {
  console.log("Server is running on port: " + port);
})