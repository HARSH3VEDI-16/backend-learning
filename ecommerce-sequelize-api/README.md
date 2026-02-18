# Ecommerce Sequelize API

## Project Overview
This is the backend API for an Ecommerce project built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**.  
It provides endpoints to manage **Users** and **Products**, supporting full **CRUD operations**.

---

## Technologies Used
- **Node.js**  
- **Express.js**  
- **Sequelize ORM**  
- **PostgreSQL**  
- **dotenv** for environment variables  
- **Nodemon** for development  

---

## Project Structure
ecommerce-sequelize-api/
├── src/
│ ├── config/ # Database configuration
│ ├── models/ # Sequelize models
│ ├── controllers/ # API controllers
│ ├── routes/ # API routes
│ └── app.js # Express app
├── server.js # Server entry point
├── package.json
└── .env # Environment variables


---

## Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/HARSH3VEDI-16/backend-learning.git
cd ecommerce-sequelize-api

Install dependencies:
npm install

Configure environment variables in .env file:
DB_NAME=ecommerce_db
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432

Run the server:
npm run dev
Server will start on http://localhost:3000
API Endpoints
Users

GET /users → Get all users

POST /users → Create a new user

PUT /users/:id → Update a user

DELETE /users/:id → Delete a user

Products

GET /products → Get all products

POST /products → Create a new product

PUT /products/:id → Update a product

DELETE /products/:id → Delete a product
Testing

Use Postman or any API client to test the endpoints.

## API Testing

You can test the backend APIs using **Postman** or any API client.  

### Sample Requests

**Users**

- **Get all users**  
  `GET http://localhost:3000/users`  

- **Create a new user**  
  `POST http://localhost:3000/users`  
  ```json
  {
    "name": "Alice",
    "email": "alice@example.com",
    "password": "1234"
  }

  Update a user
PUT http://localhost:3000/users/1

{
  "name": "Alice Updated",
  "email": "alice.new@example.com"
}
Delete a user
DELETE http://localhost:3000/users/1

Products

Get all products
GET http://localhost:3000/products

Create a new product
POST http://localhost:3000/products
{
  "name": "Laptop",
  "price": 50000
}
Update a product
PUT http://localhost:3000/products/1

Delete a product
DELETE http://localhost:3000/products/1