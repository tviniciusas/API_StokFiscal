const con = require("../config/database/mysql");

module.exports = {
    
  async getAllUsers(req, res) {
    try {
      const [rows, fields] = await con.execute("SELECT * FROM users");
      res.json(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async getUserById(req, res) {
    try {
      const [rows, fields] = await con.execute(
        "SELECT * FROM users WHERE id = ?",
        [req.params.id]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async createUser(req, res) {
    try {
      const [rows, fields] = await con.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [req.body.name, req.body.email, req.body.password]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async updateUser(req, res) {
    try {
      const [rows, fields] = await con.execute(
        "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
        [req.body.name, req.body.email, req.body.password, req.params.id]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async deleteUser(req, res) {
    try {
      const [rows, fields] = await con.execute(
        "DELETE FROM users WHERE id = ?",
        [req.params.id]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
