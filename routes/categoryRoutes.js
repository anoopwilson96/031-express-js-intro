const express = require('express');
const Category = require('../model/categoryModel');
const { getCategories, getCategoryById, postCategory, patchCateGory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router()


//Get all categories

router.get('/', getCategories )

// Get category by Id

router.get('/:categoryId',getCategoryById)

// Add new category

router.post('/:categoryId',postCategory)

// Update category

router.patch('/:categoryId',patchCateGory)

// Delete a category

router.delete('/:categoryId',deleteCategory)



module.exports = router