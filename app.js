
const express = require('express')
const breedsRouter = require('./routes/breeds.js')
const cors = require('cors')
const PORT = process.env.PORT ?? 1234

const app = express()
app.use(json())
app.use(cors())
app.disable('x-powered-by')
app.get('/', (req, res) => {
  res.json("api")
})
app.use('/breeds', breedsRouter)

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
module.exports = app