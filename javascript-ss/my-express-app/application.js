const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.send('Hii i am Harsh Trivedi!');
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});