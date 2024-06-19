const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
 mainImage: [String],
 brand: String,
 description: String,
 price: Number,
 category: {
  type: mongoose.ObjectId,
  ref: 'Category'
 }
 
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product
