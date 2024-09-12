# User Roles and Permissions Management System

## Overview
This project is a **Node.js** application that manages **users**, **roles**, and **permissions** with **Sequelize** ORM and **MySQL**. It implements a hierarchical permission system where permissions can be assigned to roles, and roles can be assigned to users. The system also supports JWT-based authentication, allowing secure login and role-restricted access to resources.

## Features

- **User Authentication**:
  - JWT-based user authentication.
  - Secure user login and signup with password hashing.
  
- **Role Management**:
  - Create and manage roles.
  - Assign roles to users.

- **Permission Management**:
  - Create and manage permissions.
  - Assign permissions to roles.
  - Support for hierarchical permissions (parent-child relationships).

- **Authorization**:
  - Middleware-based role and permission checking to restrict access to routes.
  - Protected routes that only authenticated users or users with specific roles can access.

## Technologies Used

- **Node.js**
- **Express.js** - Web framework for building APIs.
- **Sequelize** - ORM for MySQL database.
- **MySQL** - Relational database for storing user, role, and permission data.
- **JWT** - For token-based authentication.
- **bcrypt.js** - For password hashing.
- **dotenv** - For managing environment variables.

---

## Project Structure

```plaintext
.
├── config
│   └── database.js          # Sequelize configuration and database connection
├── controllers
│   ├── authController.js     # Handles user signup and login
│   ├── roleController.js     # Manages role creation and role-permission assignment
│   ├── permissionController.js # Manages permission creation and retrieval
├── middleware
│   ├── authMiddleware.js     # Middleware for JWT-based authentication
│   ├── permissionMiddleware.js # Middleware for role-permission validation
├── models
│   ├── user.js               # User model
│   ├── role.js               # Role model
│   ├── permission.js         # Permission model
│   ├── rolePermission.js     # Role-Permission association model
│   ├── userRole.js           # User-Role association model
├── routes
│   ├── authRoutes.js         # Routes for user signup and login
│   ├── roleRoutes.js         # Routes for role management
│   ├── permissionRoutes.js   # Routes for permission management
├── .env                      # Environment variables (e.g., JWT secret, database credentials)
└── server.js                 # Entry point for the Express app
