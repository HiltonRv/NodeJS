const { Router } = require("express");
const router = Router();

//import controller
const cc = require('../controllers/mascotas.controller')

router.get('/', cc.getMascotas)
router.get('/:id', cc.getMascotaId)


module.exports = router;