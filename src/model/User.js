const conn = require("../config/databases/mysql");

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

      conn.query(SQL, (err) => {
      if (err) {
        console.log(err);
      }
      res.json("TABLE users created");
    });
  },

  async dropTableUser(req, res) {
    SQL = "DROP TABLE IF EXISTS users";

    conn.query(SQL, (err) => {
      if (err) {
        console.log(err);
      }
      res.json("TABLE users dropped");
    });
  },
};
