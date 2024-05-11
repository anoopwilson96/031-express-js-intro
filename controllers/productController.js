const Product = require("../model/productModel");


const getProducts = async (req,res)=>{
  try {
    const products = await Product.find({});
    res.status(200).json(products)
    
  } catch (error) {
    res.status(404).send('Error 404: not found')
    }

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