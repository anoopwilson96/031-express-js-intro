const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
 mainImage: [String],
 brand: String,
 price: Number,
 description: String
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product
