const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourUser",
  password: "yourPassword",
  database: "databaseName"
});

