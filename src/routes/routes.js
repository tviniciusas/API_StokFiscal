const router = require('express').Router();
const routerTable = require('./routesTables');
const routerProduto = require('./routesProduto');
const routerUser = require('./routesUser');

router.use(routerUser);
router.use(routerTable);
router.use(routerProduto);


module.exports = router;