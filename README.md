# User Management REST API with JWT Authentication

# About the Project

This project is a User Management REST API developed using Node.js, Express.js and MongoDB.
It allows users to register, log in, view user details, update information and delete user records. JWT authentication is used to protect user routes.

# Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Postman

# Features
1. User Registration
2. User Login
3. Password Hashing
4. JWT-based Authentication
5. Get All Users
6. Get User by ID
7. Update User Details
8. Delete User

# API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user details |
| DELETE | `/api/users/:id` | Delete a user |

# Project Structure

```
skillnexis-week3/
│
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

# Installation and Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file using `.env.example` as a reference.
4. Configure your MongoDB connection & JWT secret.
5. Start the server using `npm start`.
The API runs on port 5000 by default.

# Authentication
JWT authentication is used, to protect user routes. Users must provide valid Bearer token, in the Authorization header, to access protected endpoints.

# Testing

The API endpoints can be tested, using Postman by sending HTTP requests, with the required JSON data.

# Internship Assignment

**Programme:** SkillNexis Internship 
**Week:** 3  
**Project:** User Management REST API with Authentication
