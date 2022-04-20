const router = require('express').Router();
const UserController = require('./controller/UserController');
const ProdutosController = require('./controller/ProdutosController');

router.get('/user', UserController.getAllUsers);
router.post('/createuser', UserController.createTableUser)

router.post('/createproduto', ProdutosController.createTable);


module.exports = router;