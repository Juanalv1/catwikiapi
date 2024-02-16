const router = require('express')
const BreedController = require('../controllers/breeds.js') 

const breedsRouter = router()

breedsRouter.get('/', BreedController.getMany)
breedsRouter.get('/:name', BreedController.getByName)

module.exports = breedsRouter; 