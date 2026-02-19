const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

// Create an order
router.post('/place', orderController.placeOrder);

// Optional: test route
router.get('/', (req, res) => {
  res.send('Order route working');
});

module.exports = router;