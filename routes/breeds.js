import { Router } from 'express'
import { BreedController } from '../controllers/breeds.js'

export const breedsRouter = Router()

breedsRouter.get('/', BreedController.getMany)
breedsRouter.get('/:name', BreedController.getByName)
