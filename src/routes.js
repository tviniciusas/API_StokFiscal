const router = require('express').Router();
const UserController = require('./controller/UserController');
const ProdutosController = require('./controller/ProdutosController');
const Produto = require('./model/Produto');

router.get('/user', UserController.getAllUsers);
// router.post('/createuser', UserController.createTableUser)


router.get('/produtos', ProdutosController.getAllProdutos);
router.post('/produtos', ProdutosController.createProduto);
router.post('/createtable', Produto.createTable);



module.exports = router;