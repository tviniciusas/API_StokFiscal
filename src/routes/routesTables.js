const router = require('express').Router();
const Produto = require('../model/Produto');
const User = require('../model/User');

router.post('/create-user-table', User.createTableUser)
router.post('/drop-user-table', User.dropTableUser)

router.post('/create-produto-table', Produto.createTable);
router.post('/drop-produto-table', Produto.dropTable);

module.exports = router;