import express, {json} from 'express'
import { breedsRouter } from './routes/breeds.js'
import cors from 'cors';



const PORT = process.env.PORT ?? 1234

const app = express()
app.use(json())
app.use(cors())
app.disable('x-powered-by')
app.get('./', (req, res) => {
  res.json("api")
})
app.use('/breeds', breedsRouter)

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})