const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
 image: [String],
 mainImage: [String],
 brand: String,
 price: Number,
 description: String
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product
