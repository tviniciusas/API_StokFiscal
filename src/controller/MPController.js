const con = require("../config/databases/mysql");
module.exports = {

    async createMprod(req, res) {

        const { cnpj, nnf, dhemi, chnfe, nitem, cprod, xprod, cbarra, cfop, cst, picms, vprod, vfrete, vseg, voutro, vdesc, vtotitem, qcom, ucom, vicms, vipi, vst } = req.body

        let SQL = "INSERT INTO mov_prod (cnpj,nnf,dhemi,chnfe,nitem,cprod,xprod,cbarra,cfop,cst,picms,vprod,vfrete,vseg,voutro,vdesc,vtotitem,qcom,ucom,vicms,vipi,vst,created_at)"
            + "                     VALUES"
            + "                     (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())";
        try {
            con.query(SQL, [cnpj, nnf, dhemi, chnfe, nitem, cprod, xprod, cbarra, cfop, cst, picms, vprod, vfrete, vseg, voutro, vdesc, vtotitem, qcom, ucom, vicms, vipi, vst],
                (err) => {
                    if (err) {
                        res.status(400).json(err);
                        return
                    }
                    res.status(200).json("Movimentação de Produtos criada com sucesso");
                })
        } catch (error) {
            res.status(200).json(error);
        }

    },

    async indexMprod(req, res) {

        let SQL = "SELECT * FROM mov_prod";
        con.query(SQL, (err, rows) => {
          if (err) {
            res.json(err);
          }
          res.json(rows);
        });

    },
    async searchByChnfe(req, res) {

        let SQL = `SELECT * FROM mov_prod where chnfe = '${req.params.id}'`;
        con.query(SQL, (err, rows) => {
          if (err) {
            res.json(err);
          }
          res.json(rows);
        });

    }
}