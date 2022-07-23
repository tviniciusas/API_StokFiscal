const conn = require("../config/databases/mysql");
module.exports = {


    async createNFCompleta(req, res){

        let SQL =
            "INSERT INTO xml_completo (cnpj, numero_nf, modelo, chave, nf_completa, dt_doc, created_at)" +
            "VALUES (?,?,?,?,?,?, NOW())";
        try {
            conn.query(
                SQL, [
                req.body.cnpj,
                req.body.numero_nf,
                req.body.modelo,
                req.body.chave,
                req.body.nf_completa,
                req.body.dt_doc,
                req.body.created_at,
            ],
                (err) => {
                    if (err) {
                        res.status(400).json(err);
                        return
                    }
                    res.status(200).json("NF criada com sucesso!");
                }
            );
        } catch (error) {
            res.status(404).json(error);
            return
        }
    },

    async getAllNfs(req, res) {

        let SQL = "SELECT * FROM xml_completo";
        conn.query(SQL, (err, rows) => {
          if (err) {
            res.json(err);
          }
          res.json(rows);
        });
      },

      async getNfById(req, res) {

        let SQL = "SELECT SUBSTRING(nf_completa,1,50000) as NF_COMP FROM xml_completo WHERE chave = ?";

        conn.query(SQL, [req.params.id], (err, rows) => {
          if (err) {
            console.log(err);
          }
          res.json(rows[0].NF_COMP.toString());
        });
      },

      async getNfByDate(req, res) {
        
        const { dt_doc_i, dt_doc_f, cnpj } = req.body

        let SQL = `SELECT chave FROM xml_completo WHERE dt_doc BETWEEN '${dt_doc_i}' AND '${dt_doc_f}' AND cnpj = ${cnpj} `;

        conn.query(SQL, [req.params.id], (err, rows) => {
          if (err) {
            console.log(err);
          }
          res.json(rows);
        });
      },
}

