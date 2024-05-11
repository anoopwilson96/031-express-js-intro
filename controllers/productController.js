const Product = require("../model/productModel");

const getProducts = async (req,res)=>{
 const products = await Product.find({});
  res.json(products)
}

const getProductById = (req,res)=>{
  res.send('Code for : Get product by ID')
}

const postProduct = (req,res)=>{
  res.send('Code for : Post new product')
}

const updateProduct = (req,res)=>{
  res.send('Code for : Update a product')
}

const deleteProduct = (req,res)=>{
  res.send('Code for : Delete a product')
}




module.exports = {
  getProducts,
  postProduct,
  getProductById,
  updateProduct,
  deleteProduct
}