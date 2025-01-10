const Order = require('../models/order');
const Candle = require('../models/candle');

// Crear una orden
exports.createOrder = async (req, res) => {
    const { items } = req.body;

    try {
    let totalAmount = 0;

    for (const item of items) {
        const candle = await Candle.findById(item.candle);
        if (!candle || candle.stock < item.quantity) {
        return res.status(400).json({ msg: 'Invalid candle or insufficient stock' });
    }
        totalAmount += candle.price * item.quantity;
        candle.stock -= item.quantity;
        await candle.save();
    }

    const order = new Order({
        user: req.user.id,
        items,
        totalAmount,
    });
    await order.save();

    res.status(201).json(order);
    } catch (err) {
    res.status(500).json({ msg: 'Error creating order', error: err.message });
    }
};

// Obtener órdenes del usuario
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('items.candle');
        res.json(orders);
    } catch (err) {
    res.status(500).json({ msg: 'Error fetching orders', error: err.message });
    }
};
