// const { Permission, User } = require('../models');
const Permission = require('../models/Permission');
const User = require ('../models/user')

exports.createPermission = async (req, res) => {
  try {
    const adminUser = await User.findByPk(req.user.id);
    if (adminUser && adminUser.isAdmin) {
      const { name } = req.body;
      const permission = await Permission.create({ name });
      res.status(201).json(permission);
    } else {
      res.status(403).json({ message: 'Forbidden: Admin rights required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPermissions = async (req, res) => {
  try {
    const adminUser = await User.findByPk(req.user.id);
    if (adminUser && adminUser.isAdmin) {
      const permissions = await Permission.findAll();
      res.status(200).json(permissions);
    } else {
      res.status(403).json({ message: 'Forbidden: Admin rights required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
