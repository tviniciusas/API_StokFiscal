const router = require('express').Router();
const ProdutosController = require('../controller/ProdutosController');

router.get('/produtos', ProdutosController.getAllProdutos);
router.get('/produtos/:id', ProdutosController.getProdutosById);
router.post('/produtos', ProdutosController.createProduto);
router.put('/produtos/:id', ProdutosController.updateProdutos);
router.delete('/produtos/:id', ProdutosController.getAllProdutos);


module.exports = router;