const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');   // 👈 ADD THIS

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);   // 👈 ADD THIS

app.get('/', (req, res) => {
  res.send('Task Manager API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});