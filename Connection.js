const mysql = require("mysql2");

const Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "softcron_qms",
});

Connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

module.exports = Connection;
