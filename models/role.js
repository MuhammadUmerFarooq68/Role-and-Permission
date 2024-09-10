const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

// Define associations after all models are defined
Role.associate = (models) => {
  Role.belongsToMany(models.User, { through: 'UserRole' });
};

module.exports = Role;
