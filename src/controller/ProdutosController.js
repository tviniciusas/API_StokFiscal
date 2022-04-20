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

  async createProduto(req, res) {
    let SQL =
      "INSERT INTO Produtos (cod_prod, descricao, ean, ncm, ex_tipi, cest, und, tipo_item, icms, red_bc_icms, item_st)" +
      "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    conn.query(
      SQL,
      [
        req.body.cod_prod,
        req.body.descricao,
        req.body.ean,
        req.body.ncm,
        req.body.ex_tipi,
        req.body.cest,
        req.body.und,
        req.body.tipo_item,
        req.body.icms,
        req.body.red_bc_icms,
        req.body.item_st,
      ],
      (err) => {
        if (err) {
          console.log(err);
        }
        res.json("Produto criado");
      }
    );
  },

  async getAllProdutos(req, res) {
    let SQL = "SELECT * FROM Produtos";

    conn.query(SQL, (err, rows, fields) => {
      if (err) {
        console.log(err);
      }
      res.json(rows);
    });
  },
};
