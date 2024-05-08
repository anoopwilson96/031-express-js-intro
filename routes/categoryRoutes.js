const express = require('express')
const router = express.Router()


//Get all categories

router.get('/',(req,res)=>{
  res.send('Not written')
})

// Get category by Id

router.get('/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Add new category

router.post('/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Update category

router.patch('/:categoryId',(req,res)=>{
  res.send('Not written')
})

// Delete a category

router.delete('/:categoryId',(req,res)=>{
  res.send('Not written')
})



module.exports = router