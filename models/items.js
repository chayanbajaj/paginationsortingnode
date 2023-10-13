const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
})

module.exports = mongoose.model('Product', itemSchema);