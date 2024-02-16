import { BreedModel } from "../models/breed.js"

export class BreedController {
  static async getMany (req, res) {
    try {
      const { onlyNames, limit, top } = req.query
      const breeds = await BreedModel.getMany({ onlyNames, limit, top })
      res.json(breeds)
    } catch (error) {
      res.status(500).json(error)
    }

  }
  static async getByName (req, res) {
    try {
      const  { name } = req.params
      const breed = await BreedModel.getByName({name})
      res.json(breed)
    } catch (error) {
      res.status(500).json(error)
    }

  }
}