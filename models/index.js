const sequelize = require('../config/database');
const User = require('./user');
const Role = require('./role');


User.associate(sequelize.models);
Role.associate(sequelize.models);

module.exports = {
  User,
  Role,
};
