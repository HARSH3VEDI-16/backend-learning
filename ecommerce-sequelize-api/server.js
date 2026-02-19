require('dotenv').config();
const User = require("./src/models/user.model");
const Product = require("./src/models/product.model");

const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = 3000;

sequelize.authenticate()
  .then(async () => {
    console.log("Database connected successfully");

    // This will create tables if they don't exist
    await sequelize.sync({ alter: true });
    console.log("Tables synced successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });