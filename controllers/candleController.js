const Candle = require('../models/candle');

// Crear una vela
exports.createCandle = async (req, res) => {
    const { name, scent, price, stock } = req.body;

    try {
        const candle = new Candle({ name, scent, price, stock });
        await candle.save();
        res.status(201).json(candle);
    } catch (err) {
    res.status(500).json({ msg: 'Error creating candle', error: err.message });
    }
};

// Obtener todas las velas
exports.getAllCandles = async (req, res) => {
    try {
        const candles = await Candle.find();
        res.json(candles);
    } catch (err) {
        res.status(500).json({ msg: 'Error fetching candles', error: err.message });
    }
};
