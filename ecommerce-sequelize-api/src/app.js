const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");

// Register routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

module.exports = app;