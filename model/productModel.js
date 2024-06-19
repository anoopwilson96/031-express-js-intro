const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
 mainImage: [String],
 price: Number,
 brand: String,
 description: String,
 
 category: {
  type: mongoose.ObjectId,
  ref: 'Category'
 }
 
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product
