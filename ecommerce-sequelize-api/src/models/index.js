const sequelize = require('../config/database');

const User = require('./user');
const Category = require('./category');
const Product = require('./product');
const Order = require('./order');
const OrderItem = require('./orderItem');
const Payment = require('./payment');

// Associations will go here later

module.exports = {
  sequelize,
  User,
  Category,
  Product,
  Order,
  OrderItem,
  Payment
};