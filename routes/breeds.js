const express = require('express');
const router = express.Router();
const BreedController = require('../controllers/breeds');

// No llames a router() aquí, ya has creado la instancia con express.Router()

// Usa directamente el enrutador que ya has creado
router.get('/', BreedController.getMany);
router.get('/:name', BreedController.getByName);

module.exports = router;