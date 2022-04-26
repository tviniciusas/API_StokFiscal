const conn = require("../config/databases/mysql");

module.exports = {

  async createProduto(req, res) {

    let SQL =
      "INSERT INTO produtos (cod_prod, descricao, ean, ncm, ex_tipi, cest, und, tipo_item, p_icms, p_red_bc_icms, item_st, cnpj, HASH)" +
      "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    conn.query(
      SQL,
      [
        req.body.cnpj,
        req.body.cod_prod,
        req.body.descricao,
        req.body.ean,
        req.body.ncm,
        req.body.ex_tipi,
        req.body.cest,
        req.body.und,
        req.body.tipo_item,
        req.body.p_icms,
        req.body.p_red_bc_icms,
        req.body.item_st,
        req.body.HASH,
      ],
      (err) => {
        if (err) {
          res.json(err);
        }
        res.json("Produto criado com sucess!");
      }
    );
  },

  async getAllProdutos(req, res) {

    let SQL = "SELECT * FROM produtos";
    conn.query(SQL, (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.json(rows);
    });
  },

  async getProdutosById(req, res) {
    let SQL = "SELECT * FROM produtos WHERE id = ?";

    conn.query(SQL, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.json(rows);
    });
  },

  async deleteProdutos(req, res) {
    let SQL = "DELETE FROM produtos WHERE id = ?";

    conn.query(SQL, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.json("Produto deletado");
    });
  },

  async updateProdutos(req, res) {
    let SQL =
      "UPDATE produtos SET cod_prod = ?, descricao = ?, ean = ?, ncm = ?, ex_tipi = ?, cest = ?, und = ?, tipo_item = ?, p_icms = ?, p_red_bc_icms = ?, item_st = ?, HASH = ?, cnpj = ? WHERE id = ?";

    conn.query(
      SQL,
      [
        req.body.cnpj,
        req.body.cod_prod,
        req.body.descricao,
        req.body.ean,
        req.body.ncm,
        req.body.ex_tipi,
        req.body.cest,
        req.body.und,
        req.body.tipo_item,
        req.body.p_icms,
        req.body.p_red_bc_icms,
        req.body.item_st,
        req.body.HASH,
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
