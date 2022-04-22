const router = require('express').Router();
const loginController = require('../controller/LoginController');

router.post('/login', loginController.Login);

module.exports = router;