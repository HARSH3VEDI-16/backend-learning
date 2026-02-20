const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Protected Profile
router.get('/profile', protect, (req, res) => {
  res.status(200).json({ message: 'Profile info', user: req.user });
});

module.exports = router;