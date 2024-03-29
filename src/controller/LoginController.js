const conn = require("../config/databases/mysql");
const jwt = require("jsonwebtoken");
require('dotenv/config');
const SECRET = process.env.SECRET;

module.exports = {
  
  async Login(req, res) {
    let SQL = "SELECT * FROM users WHERE email = ? AND password = ?";
    conn.query(SQL, [req.body.email, req.body.password], (err, rows) => {
      if (!err && rows.length > 0) {
        const token = jwt.sign({ id: rows[0].id, username: rows[0].email , tipo: rows[0].tipo}, SECRET, {
          expiresIn: "365days",
        });
        return res.json({auth:true, id: rows[0].id, email: rows[0].email, role: rows[0].tipo, token });
      }
      return res
        .status(500)
        .json({ auth: false, message: "Falha ao autenticar o usuário " + err });
    });
  },
};
