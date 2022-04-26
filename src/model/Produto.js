const conn = require("../config/databases/mysql");

module.exports = {
  async createTable(req, res) {

    let SQL =
      "CREATE TABLE IF NOT EXISTS produtos (" +
      "id int(10) NOT NULL AUTO_INCREMENT," +
      "cod_prod varchar(100) NOT NULL," +
      "descricao varchar(255) NOT NULL," +
      "ean varchar(100) NOT NULL," +
      "ncm varchar(100) ," +
      "ex_tipi varchar(100) ," +
      "cest varchar(100) ," +
      "und varchar(100) ," +
      "tipo_item varchar(100) ," +
      "icms varchar(100)," +
      "red_bc_icms decimal(6,4) NOT NULL ," +
      "item_st decimal(6,4) NOT NULL ," +
      "PRIMARY KEY (id))";

    conn.query(SQL, (err) => {

      if (err) {
       res.json(err);
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
  },
};
