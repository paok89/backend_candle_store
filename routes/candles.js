const express = require('express');
const { createCandle, getAllCandles } = require('../controllers/candleController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/', createCandle);
router.get('/', getAllCandles);

module.exports = router;
