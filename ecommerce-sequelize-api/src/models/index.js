const sequelize = require('../config/database');

const User = require('./user.model');
const Category = require('./category.model');
const Product = require('./product.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');
const Payment = require('./payment.model');

// ================== Associations ==================

// User ↔ Order
User.hasMany(Order);        // One user can have many orders
Order.belongsTo(User);      // Each order belongs to a user

// Category ↔ Product
Category.hasMany(Product);  // One category has many products
Product.belongsTo(Category); // Each product belongs to a category

// Product ↔ Order (many-to-many through OrderItem)
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

// Order ↔ Payment (one-to-one)
Order.hasOne(Payment);
Payment.belongsTo(Order);

// ================== Export Models ==================
module.exports = {
  sequelize,
  User,
  Category,
  Product,
  Order,
  OrderItem,
  Payment
};