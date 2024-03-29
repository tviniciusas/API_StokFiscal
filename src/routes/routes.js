const router = require('express').Router();
const routerTable = require('./routesTables');
const routerProduto = require('./routesProduto');
const routerUser = require('./routesUser');
const routerLogin = require('./routesLogin');
const routerNFCompleto = require('./routesNFCompleta');
const routerParameter = require('./routeParameter');
const routerMP = require('./routeMProd');
const verifyAutenticationJWT = require('../config/auth/JwtAuth');
const isAdmin = require('../config/auth/isAdmin');

router.use(routerLogin);
router.use(verifyAutenticationJWT);
router.use(isAdmin);
router.use(routerTable);
router.use(routerUser);
router.use(routerNFCompleto);
router.use(routerMP);
router.use(routerParameter);
router.use(routerProduto);

module.exports = router;