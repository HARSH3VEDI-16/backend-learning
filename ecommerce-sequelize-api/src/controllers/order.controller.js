const { sequelize, Order, OrderItem, Product } = require("../models");

exports.placeOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const t = await sequelize.transaction();

  try {
    // Find the product
    const product = await Product.findByPk(productId, { transaction: t });
    if (!product) throw new Error("Product not found");
    if (product.stock < quantity) throw new Error("Insufficient stock");

    // Calculate total amount
    const totalAmount = product.price * quantity;

    // Create the order with totalAmount
    const order = await Order.create(
      { UserId: userId, totalAmount },
      { transaction: t }
    );

    // Create order item
    await OrderItem.create(
      {
        OrderId: order.id,
        ProductId: productId,
        quantity,
        price: product.price,
      },
      { transaction: t }
    );

    // Update product stock
    product.stock -= quantity;
    await product.save({ transaction: t });

    await t.commit();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
};