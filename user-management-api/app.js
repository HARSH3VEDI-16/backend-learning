require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database');

// VERY IMPORTANT: Import model
require('./src/models/User');

const app = express();
app.use(express.json());
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('User Management API Running');
});

sequelize.authenticate()
  .then(async () => {
    console.log('Database connected successfully');

    // VERY IMPORTANT: Sync models
    await sequelize.sync();
    console.log('Tables synced successfully');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect:', err);
  });