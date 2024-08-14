const express = require("express");
const fs = require('node:fs');

const router = express.Router();

// creates the data.txt file and adds some headders
router.get("/", (req,res) => {
  const foodQuery = req.query.foodQuery;

  const data = fs.readFileSync('data.txt',
    { encoding: 'utf8', flag: 'r' });

  var table = ""

  const rows = data.split(' ');
  for (var i = 0; i < rows.length-1; i++) {
    var cells = rows[i].split(',');
    if (cells[2] == foodQuery) {
      var tableRow = `<tr><td>${cells[0]}</td><td>${cells[1]}</td><td>${cells[2]}</td></tr>\n`
      table += tableRow;
    }
  }
  
  res.send(
    `<html>
      <head>
      </head>
      <body>
        <p>You want to search for: ${foodQuery}.</p>
        <p>Results:</p>
        <table>
          ${table}
        </table>
      </body>
    </html>`
  );
});

module.exports = router;