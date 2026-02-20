User Management API (Mini Project)
This is a Node.js + Express + Sequelize backend project demonstrating:

User registration with hashed passwords

User login with JWT authentication

JWT protected routes (/profile)

Basic role-based structure (user, admin, manager)
🔧 Technologies Used

Node.js

Express.js

PostgreSQL

Sequelize ORM

bcrypt (password hashing)

jsonwebtoken (JWT)

dotenv (environment variables)

⚡ Setup Instructions

Clone the repository:
git clone <your-repo-url>
cd user-management-api

Install dependencies:
npm install

Setup .env file with:
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_NAME=user_management
DB_PORT=5432
PORT=5000
JWT_SECRET=supersecretkey123
JWT_EXPIRES_IN=24h

Start server:
npx nodemon app.js
Server will run on http://localhost:5000

🚀 API Endpoints
Method	Endpoint	Body / Headers	Description
POST	/api/users/register	{ "name", "email", "password" }	Register new user
POST	/api/users/login	{ "email", "password" }	Login & get JWT token
GET	/api/users/profile	Header: Authorization: Bearer <token>	Get logged-in user profile

Notes

Passwords are hashed with bcrypt, never stored in plain text.

JWT tokens are used for stateless authentication.

Make sure to add Authorization header for protected routes.