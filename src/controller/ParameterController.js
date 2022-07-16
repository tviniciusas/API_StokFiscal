const conn = require("../config/databases/mysql");

module.exports = {
    async getParameters(req, res) {
        conn.query("SELECT * FROM parameter", (err, rows) => {
          if (!err) {
            return res.json(rows);
          }
          return res.status(500).json({ message: "Falha na busca de parametros" });
        });
      },
}