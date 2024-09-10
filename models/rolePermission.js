const { DataTypes } = require('sequelize');

const sequelize = require('../config/database'); 

  const RolePermission = sequelize.define('RolePermission', {
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
      allowNull: false,
    },
    permissionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Permissions',
        key: 'id',
      },
      allowNull: false,
    },
  });

module.exports= RolePermission