const mongoose = require('mongoose');

const candleSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    scent: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
})

module.exports = mongoose.model('Candle', candleSchema);