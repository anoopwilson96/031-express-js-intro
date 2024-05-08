const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

//Get all products

app.get('/products',(req,res)=>{
  res.send('Not written')
})

// Get product by Id

app.get('/products/:productId',(req,res)=>{
  res.send('Not written')
})

// Add new product

app.post('/products/:productId',(req,res)=>{
  res.send('Not written')
})

// Update product

app.patch('/products/:productId',(req,res)=>{
  res.send('Not written')
})

// Delete a product

app.delete('/products/:productId',(req,res)=>{
  res.send('Not written')
})



//Get all categories

app.get('/categories',(req,res)=>{
  res.send('Not written')
})

// Get category by Id

app.get('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Add new category

app.post('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Update category

app.patch('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Delete a category

app.delete('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})