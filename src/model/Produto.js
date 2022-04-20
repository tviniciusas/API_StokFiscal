const coon = require("../config/database/mysql");

module.export = {
  async createTable(req, res) {
    let SQL = `CREATE TABLE IF NOT EXISTS Produtos (
            id int(10) NOT NULL AUTO_INCREMENT,
            cod_prod varchar(100) NOT NULL,
            descricao varchar(255) NOT NULL,
            ean varchar(100) NOT NULL,
            ncm varchar(100) NOT NULL,
            ex_tipi varchar(100) NOT NULL,
            cest varchar(100) NOT NULL,
            und varchar(100) NOT NULL,
            tipo_item varchar(100) NOT NULL,
            icms varchar(100) NOT NULL,
            red_bc_icms varchar(100) NOT NULL,
            item_st varchar(100) NOT NULL,
            PRIMARY KEY (id)
        );`;

    coon.execute(SQL, (err, result) => {
      if (err) {
        res.json(`erro ao criar tabela ${err}`);
      } else {
        res.json(`Tabela Produtos criada com sucesso!`);
      }
    });
  },
};
