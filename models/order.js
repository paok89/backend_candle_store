const mongoose = require('mongoose')
const candle = require('./candle');
const { MongoOIDCError } = require('mongodb');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            candle: { type: mongoose.Schema.Types.ObjectId, ref: 'Candle', required: true},
            quantity: { type: Number, required: true },

        },
    ],
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);