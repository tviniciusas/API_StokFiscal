const router = require('express').Router();
const UserController = require('../controller/UserController');
const ProdutoController = require('../controller/ProdutoController');



router.get('user', UserController.getAllUsers);
router.get('produtos', ProdutoController.getAllProdutos);
router.post('produtos', ProdutoController.createProduto);



module.exports = router;