

module.export = {

    async getAllProdutos(req, res) {
        try {
            const [rows, fields] = await con.execute("SELECT * FROM produtos");
            res.json(rows);
        } catch (error) {
            res.status(500).send(error);
        }
    },
}