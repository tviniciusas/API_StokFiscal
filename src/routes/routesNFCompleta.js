const router = require('express').Router();
const NFCompleto = require('../controller/NFCompletaController');

router.get('/nf_completo', NFCompleto.getAllNfs);
router.get('/nf_completo/:id', NFCompleto.getNfById);
router.post('/nf_completo', NFCompleto.createNFCompleta);

module.exports = router;