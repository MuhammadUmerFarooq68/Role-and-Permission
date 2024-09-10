// const { Role, User } = require('../models');
const Role = require ('../models/role');
const User = require ('../models/user')
exports.createRole = async (req, res) => {
  try {
    const adminUser = await User.findByPk(req.user.id);
    if (adminUser && adminUser.isAdmin) {
      const { name } = req.body;
      const role = await Role.create({ name });
      res.status(201).json(role);
    } else {
      res.status(403).json({ message: 'Forbidden: Admin rights required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoles = async (req, res) => {
  try {
    const adminUser = await User.findByPk(req.user.id);
    if (adminUser && adminUser.isAdmin) {
      const roles = await Role.findAll();
      res.status(200).json(roles);
    } else {
      res.status(403).json({ message: 'Forbidden: Admin rights required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
