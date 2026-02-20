// src/controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// -------------------- REGISTER USER --------------------
const registerUser = async (req, res) => {
  console.log("🔥 REGISTER API CALLED 🔥");

  try {
    const { name, email, password } = req.body;
    console.log("Original password:", password);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    // Save user in DB
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    console.log("Saved password in DB:", user.password);

    // Exclude password from response
    const { password: pwd, ...userWithoutPassword } = user.toJSON();

    res.status(201).json({
      message: "User created successfully",
      user: userWithoutPassword
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// -------------------- LOGIN USER --------------------
const loginUser = async (req, res) => {
  console.log("🔥 LOGIN API CALLED 🔥");

  try {
    const { email, password } = req.body;

    // 1️⃣ Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });

    // 3️⃣ Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Exclude password from response
    const { password: pwd, ...userWithoutPassword } = user.toJSON();

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Export both functions
module.exports = {
  registerUser,
  loginUser
};