const express = require('express')
const router = express.Router();
const BreedController = require('../controllers/breeds') 

const breedsRouter = router()

breedsRouter.get('/', BreedController.getMany)
breedsRouter.get('/:name', BreedController.getByName)

module.exports = breedsRouter; 