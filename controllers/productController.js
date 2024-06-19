const Product = require("../model/productModel");


const getProducts = async (req,res)=>{
  try {
    
    const products = await Product.find(req.query);
    res.status(200).json(products)
    
  } catch (error) {
    res.status(404).send('Error 404: not found')
    }

}


const getProductById = async(req,res)=>{
  try {
    const product= await Product.findById(req.params.productId).exec();
    res.status(200).json(product)
  } catch (error) {
    
    res.status(404).send('Error 404: not found')
    
  }

}


const postProduct = async(req,res)=>{
  try {
    const productData = req.body
  // console.log(productData)
  const product = new Product (productData) 
  //console.log(product)
  await product.save()
    res.status(201).json(product)
    console.log(product)
    
  } catch (error) {
    res.status(400).send('Error 400: bad request')
    
  }
  
}






const updateProduct = async (req,res)=>{
  try {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId,req.body,{new:true})
  res.status(200).send(updatedProduct)
    
  } catch (error) {

    res.status(500).send('Internal server error')
    
  }


  
 
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