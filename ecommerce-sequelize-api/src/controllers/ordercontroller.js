const { sequelize, Order, OrderItem, Product } = require("../models");

exports.placeOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const t = await sequelize.transaction();

  try {
    const product = await Product.findByPk(productId, { transaction: t });

    if (!product) throw new Error("Product not found");
    if (product.stock < quantity) throw new Error("Insufficient stock");

    const order = await Order.create(
      { UserId: userId },
      { transaction: t }
    );

    await OrderItem.create(
      {
        OrderId: order.id,
        ProductId: productId,
        quantity,
        price: product.price
      },
      { transaction: t }
    );

    product.stock -= quantity;
    await product.save({ transaction: t });

    await t.commit();

    res.status(201).json({ message: "Order placed successfully" });

  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
};