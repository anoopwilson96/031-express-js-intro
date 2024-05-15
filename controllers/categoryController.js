const { default: mongoose } = require("mongoose");
const Category = require("../model/categoryModel");

// to get categories

const getCategories = async (req,res)=>{
  try{
    const categories =  await Category.find({});
    res.status(200).json(categories)
  }
  catch(error){
    res.status(404).send('Error 404: Not Found')
  }
}

// to get category by specific ID

const getCategoryById = async (req,res)=>{
  try {
    const category = await Category.findById(req.params.categoryId).exec();
    res.status(200).json(category)
  } catch (error) {
    res.status(404).send('Error 404: not found')
  }
}

//post new category:
// 1. Add {JSON} request in postman.com through body > raw 
// 2. Give post request
// 3. Add app.use(express.json())
// 4. Get the needed body part of request from postman.com (front end)
//    by const categoryData = req.body
// 5. Then add that data into database by mongoose.js 

const postCategory = async (req,res)=>{
  // console.log (req.body) shows same json from front end or postman.com
  const categoryData = req.body
  const category = new Category (categoryData)
  // console.log(category) // new category with unique ID is displayed. This is called DOCUMENT
  await category.save()
  res.json(category)
}




const patchCateGory = (req,res)=>{
  res.send('Not written')
}
const deleteCategory = (req,res)=>{
  res.send('Not written')
}





 module.exports = {
  getCategories,
  getCategoryById,
  postCategory,
  patchCateGory,
  deleteCategory
}