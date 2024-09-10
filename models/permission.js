const { DataTypes } = require('sequelize');

const sequelize = require('../config/database'); 
  const Permission = sequelize.define('Permission', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });

module.exports = Permission;

