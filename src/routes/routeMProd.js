const router = require('express').Router();
const MPController = require('../controller/MPController');

router.post('/mprod', MPController.createMprod)
router.get('/mprod', MPController.indexMprod)
router.get('/mprod/:id', MPController.indexMprod)

module.exports = router
