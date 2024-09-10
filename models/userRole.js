const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/user');  // Import User model
const Role = require('../models/role');  // Import Role model

const UserRole = sequelize.define('UserRole', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,  // Reference the User model
      key: 'id',
    },
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,  // Reference the Role model
      key: 'id',
    },
    allowNull: false,
  },
});

module.exports = UserRole;
