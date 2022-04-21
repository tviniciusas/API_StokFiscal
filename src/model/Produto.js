const conn = require("../config/database/mysql");

module.exports = {
    
  async createTable(req, res) {
    let SQL =
      "CREATE TABLE IF NOT EXISTS Produtos (" +
      "id int(10) NOT NULL AUTO_INCREMENT," +
      "cod_prod varchar(100) NOT NULL," +
      "descricao varchar(255) NOT NULL," +
      "ean varchar(100) NOT NULL," +
      "ncm varchar(100) NOT NULL," +
      "ex_tipi varchar(100) NOT NULL," +
      "cest varchar(100) NOT NULL," +
      "und varchar(100) NOT NULL," +
      "tipo_item varchar(100) NOT NULL," +
      "icms varchar(100) NOT NULL," +
      "red_bc_icms varchar(100) NOT NULL," +
      "item_st varchar(100) NOT NULL," +
      "PRIMARY KEY (id))";

    conn.query(SQL, (err) => {
      if (err) {
        console.log(err);
      }
      res.json("TABLE Produtos created");
    });
  },

  async dropTable(req, res) {
    let SQL = "DROP TABLE IF EXISTS Produtos";

    conn.query(SQL, (err) => {
      if (err) {
        console.log(err);
      }
      res.json("TABLE Produtos dropped");
    });
  }
};
