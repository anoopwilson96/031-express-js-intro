const express = require('express')
const router = express.Router()


//Get all categories

router.get('/categories',(req,res)=>{
  res.send('Not written')
})

// Get category by Id

router.get('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Add new category

router.post('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Update category

router.patch('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Delete a category

router.delete('/categories/:categoryId',(req,res)=>{
  res.send('Not written')
})



module.exports = router