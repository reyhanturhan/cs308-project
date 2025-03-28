const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  // and other fields
});

module.exports = mongoose.model('Product', productSchema);
