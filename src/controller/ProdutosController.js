const conn = require("../config/databases/mysql");

module.exports = {

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
          res.json(err);
        }
        res.json("Produto criado");
      }
    );
  },

  async getAllProdutos(req, res) {

    let SQL = "SELECT * FROM Produtos";
    conn.query(SQL, (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.json(rows);
    });
  },

  async getProdutosById(req, res) {
    let SQL = "SELECT * FROM Produtos WHERE id = ?";

    conn.query(SQL, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.json(rows);
    });
  },

  async deleteProdutos(req, res) {
    let SQL = "DELETE FROM Produtos WHERE id = ?";

    conn.query(SQL, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.json("Produto deletado");
    });
  },

  async updateProdutos(req, res) {
    let SQL =
      "UPDATE Produtos SET cod_prod = ?, descricao = ?, ean = ?, ncm = ?, ex_tipi = ?, cest = ?, und = ?, tipo_item = ?, icms = ?, red_bc_icms = ?, item_st = ? WHERE id = ?";

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
        req.params.id,
      ],
      (err) => {
        if (err) {
          res.json(err);
        }
        res.json("Produto atualizado");
      }
    );
  },
};
