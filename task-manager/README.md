# 🚀 Task Manager API

A backend REST API built using Node.js, Express, and MongoDB.

---

## 📌 Features

- ✅ Create Task
- ✅ Get All Tasks
- ✅ Update Task
- ✅ Delete Task
- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

---

## 📂 Project Structure

task-manager/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
├── .env
├── package.json

---

## ⚙️ Installation

1. Clone the repository

2. Install dependencies

3. Create a .env file and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


4. Run the server

npx nodemon server.js

---

## 🔐 Authentication

Protected routes require a Bearer Token.

Example:

Authorization → Bearer Token → paste JWT

---

## 📬 API Endpoints

### User Routes

POST /api/users/register  
POST /api/users/login  

### Task Routes

GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

---

## 👨‍💻 Author

Harsh Trivedi
