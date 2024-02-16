const express = require('express')
const breedsRouter = express.Router();
const BreedController = require('../controllers/breeds') 


breedsRouter.get('/', BreedController.getMany)
breedsRouter.get('/:name', BreedController.getByName)

module.exports = breedsRouter; 