const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require('./routes/order.routes');

// Register routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes); // new

module.exports = app;