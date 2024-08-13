const express = require("express");
const fs = require('node:fs');

const router = express.Router();

fs.closeSync(fs.openSync("data.txt", "w"));

router.get("/", (req,res) => {
  const newContent = `${req.query.firstName},${req.query.lastName},${req.query.favFood} `
  const data = fs.readFileSync('data.txt',
    { encoding: 'utf8', flag: 'r' });

  fs.appendFile('data.txt', newContent, err => {
    if (err) {
      console.err(err);
    }
  });

  var table = ""

  const rows = data.split(' ');
  for (var i = 0; i < rows.length-1; i++) {
    var cells = rows[i].split(',');
    var tableRow = `<tr><td>${cells[0]}</td><td>${cells[1]}</td><td>${cells[2]}</td></tr>\n`
    table += tableRow;
  }
    table += `<tr><td>${req.query.firstName}</td><td>${req.query.lastName}</td><td>${req.query.favFood}</td></tr>\n`
  
  res.send(
    `<html>
      <head>
      </head>
      <body>
        <table>
          ${table}
        </table>
      </body>
    </html>`
  );
});

module.exports = router;