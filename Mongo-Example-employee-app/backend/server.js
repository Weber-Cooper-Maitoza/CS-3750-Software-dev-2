const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config({ path: "./config.env"});

app.use(cors());
app.use(express.json());

// had to add this because it wouldn't route to record.
app.use(require("./routes/record"));

const dbo = require("./db/conn");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  dbo.connectToServer(function(err) {
    if (err) {
      console.err(err);
    }
  });
  console.log(`server is running on port ${port}`)
});