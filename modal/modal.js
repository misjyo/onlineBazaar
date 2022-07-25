const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onlinebazaar",
});
con.connect((err) => {
  if (err) {
    return console.log(err.sqlMessage);
  }

  console.log("database connected");
});

module.exports = { con };
