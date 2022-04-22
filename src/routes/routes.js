const router = require('express').Router();
const routerTable = require('./routesTables');
const routerProduto = require('./routesProduto');
const routerUser = require('./routesUser');
const routerLogin = require('./routesLogin');
const verifyAutenticationJWT = require('../config/auth/JwtAuth');
const isAdmin = require('../config/auth/isAdmin');

router.use(routerLogin);
router.use(verifyAutenticationJWT);
router.use(isAdmin);
router.use(routerUser);
router.use(routerTable);
router.use(isAdmin);
router.use(routerProduto);

module.exports = router;