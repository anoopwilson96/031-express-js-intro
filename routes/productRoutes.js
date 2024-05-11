const express = require('express')
const { getProducts, postProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productController')
const router = express.Router()

//Get all products

router.get('/', getProducts)

// Get product by Id

router.get('/:productId',getProductById)

// Add new product

router.post('/',postProduct)

// Update product

router.patch('/:productId',updateProduct)

// Delete a product

router.delete('/:productId',deleteProduct)



module.exports = router