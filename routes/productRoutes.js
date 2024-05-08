const express = require('express')
const { getProducts } = require('../controllers/productController')
const router = express.Router()

//Get all products

router.get('/', getProducts)

// Get product by Id

router.get('/:productId',(req,res)=>{
  res.send('Not written')
})

// Add new product

router.post('/:productId',(req,res)=>{
  res.send('Not written')
})

// Update product

router.patch('/:productId',(req,res)=>{
  res.send('Not written')
})

// Delete a product

router.delete('/:productId',(req,res)=>{
  res.send('Not written')
})



module.exports = router