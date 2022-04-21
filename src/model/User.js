const conn = require("../config/database/mysql");

module.exports = {
  async createTableUser(req, res) {
    SQL =
      " CREATE TABLE IF NOT EXISTS users" +
      " (id INT AUTO_INCREMENT PRIMARY KEY," +
      " name VARCHAR(255)," +
      " email VARCHAR(255)," +
      " password VARCHAR(255)," +
      " tipo VARCHAR(255)," +
      " isAdmin BOOLEAN DEFAULT FALSE)";

    con.query(SQL, (err) => {
      if (err) {
        console.log(err);
      }
      res.send("TABLE users created");
    });
  },

  async dropTableUser(req, res) {
    SQL = "DROP TABLE IF EXISTS users";

    con.query(SQL, (err) => {
      if (err) {
        console.log(err);
      }
      res.send("TABLE users dropped");
    });
  },
};
