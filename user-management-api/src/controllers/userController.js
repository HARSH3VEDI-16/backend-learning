// src/controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

// -------------------- REGISTER USER --------------------
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🔎 Validate input manually (better practice)
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    logger.info(`New user registered: ${user.email}`);

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("ERROR DETAILS:", error.errors);

    logger.error(`Registration failed: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}; // ✅ <-- THIS WAS MISSING

// -------------------- LOGIN USER --------------------
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      logger.error(`Login failed - user not found: ${email}`);
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      logger.error(`Login failed - wrong password: ${email}`);
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    const { password: pwd, ...userWithoutPassword } = user.toJSON();

    logger.info(`User logged in: ${user.email}`);

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Export
module.exports = {
  registerUser,
  loginUser
};