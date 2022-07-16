const router = require('express').Router();
const parameterController = require('../controller/ParameterController');

router.get('/parameters', parameterController.getParameters);


module.exports = router;