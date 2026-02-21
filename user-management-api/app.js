require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database');

// VERY IMPORTANT: Import model
require('./src/models/User');

const app = express();
app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// ✅ Health Route (ADD THIS)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'User Management API running'
  });
});

// Existing root route
app.get('/', (req, res) => {
  res.send('User Management API Running');
});

sequelize.authenticate()
  .then(async () => {
    console.log('Database connected successfully');

    // Sync models
    await sequelize.sync();
    console.log('Tables synced successfully');

    const PORT = process.env.PORT || 5000;
    const logger = require('./src/utils/logger');

    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect:', err);
  });