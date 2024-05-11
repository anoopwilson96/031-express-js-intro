const Category = require("../model/categoryModel");


const getCategories = async (req,res)=>{
  const categories =  await Category.find({});
   res.json(categories)
 }
 
const getCategoryById = (req,res)=>{
  res.send('Not written')
}
const postCategory = (req,res)=>{
  res.send('Not written')
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