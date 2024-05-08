const express = require('express')
const app = express()
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const port = 3000

app.use(cors())

app.use('/products',productRoutes)
app.use('/categories',categoryRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})