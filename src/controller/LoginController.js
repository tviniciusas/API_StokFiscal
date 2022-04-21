const conn = require("../config/database/mysql");


module.exports = {
  async Login(req, res) {
    let SQL = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
    conn.query(SQL, [req.body.email, req.body.senha], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.json(rows);
    });
  },
};
