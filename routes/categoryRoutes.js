const express = require('express');
const Category = require('../model/categoryModel');
const { getCategories, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router()


//Get all categories

router.get('/', getCategories )

// Get category by Id

router.get('/:categoryId',getCategoryById)

// Add new category

router.post('/',postCategory)

// Update category

router.patch('/:categoryId',patchCategory)

// Delete a category

router.delete('/:categoryId',deleteCategory)



module.exports = router