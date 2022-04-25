const conn = require("../config/databases/mysql");

module.exports = {
  async getAllUsers(req, res) {
    conn.query("SELECT * FROM users", (err, rows) => {
      if (!err) {
        return res.json(rows);
      }
      return res.status(500).json({ message: "Falha ao buscar usuários" });
    });
  },

  async getUserById(req, res) {
    conn.query(
      "SELECT * FROM users WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (!err) {
          return res.json(rows);
        }
        return res.status(500).json({ message: "Falha ao buscar usuário" });
      }
    );
  },

  async createUser(req, res) {
    try {
      conn.query(
        "INSERT INTO users (name, email, password, tipo) VALUES (?, ?, ?, ?)",
        [req.body.name, req.body.email, req.body.password, req.body.tipo],
        (err) => {
          if (!err) {
            return res.json({
              message: `Usuário ${req.body.name} criado com sucesso`,
            });
          }
          return res.status(500).json({ message: "Falha ao criar usuário" });
        }
      );
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async updateUser(req, res) {
    try {
      const [rows, fields] = await conn.execute(
        "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
        [req.body.name, req.body.email, req.body.password, req.params.id],
        (err) => {
          if (!err) {
            return res.json({
              message: `Usuário ${req.body.name} atualizado com sucesso`,
            });
          }
          return res
            .status(500)
            .json({ message: "Falha ao atualizar usuário" });
        }
      );
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async deleteUser(req, res) {
    try {
      const [rows, fields] = await conn.execute(
        "DELETE FROM users WHERE id = ?",
        [req.params.id]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
