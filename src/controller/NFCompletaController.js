const conn = require("../config/databases/mysql");
module.exports = {


    async createNFCompleta(req, res){

      const maxCall = 0;

        let SQL =
            "INSERT INTO xml_completo (cnpj, numero_nf, modelo, chave, nf_completa, created_at)" +
            "VALUES (?,?,?,?,?, NOW())";
        try {
            conn.query(
                SQL, [
                req.body.cnpj,
                req.body.numero_nf,
                req.body.modelo,
                req.body.chave,
                req.body.nf_completa,
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

        let SQL = "SELECT * FROM xml_completo WHERE chave = ?";
        conn.query(SQL, [req.params.id], (err, rows) => {
          if (err) {
            console.log(err);
          }
          res.json(rows);
        });
      },
}

