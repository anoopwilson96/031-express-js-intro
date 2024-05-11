const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const port = 3000

app.use(cors())

app.use('/products',productRoutes)
app.use('/categories',categoryRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// getting-started.js


main() .then(()=>{console.log('connected')})  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://031expressjsintro:cKIntvHyKAUab75Y@cluster0.mjw1uqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}