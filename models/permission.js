// models/permission.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Permission extends Model {}

Permission.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Permissions', // refers to table name
      key: 'id',
    },
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Permission',
});

// Self-referencing association
Permission.belongsTo(Permission, { as: 'parent', foreignKey: 'parentId' });
Permission.hasMany(Permission, { as: 'children', foreignKey: 'parentId' });

module.exports = Permission;
