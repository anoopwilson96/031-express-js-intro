const express = require('express')
const router = express.Router()

//Get all products

router.get('/products',(req,res)=>{
  res.send('get product')
})

// Get product by Id

router.get('/products/:productId',(req,res)=>{
  res.send('Not written')
})

// Add new product

router.post('/products/:productId',(req,res)=>{
  res.send('Not written')
})

// Update product

router.patch('/products/:productId',(req,res)=>{
  res.send('Not written')
})

// Delete a product

router.delete('/products/:productId',(req,res)=>{
  res.send('Not written')
})



module.exports = router