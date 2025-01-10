require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');

const userRoutes = require('./routes/users');
const candleRoutes = require('./routes/candles');
const orderRoutes = require('./routes/orders');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/candles', candleRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));