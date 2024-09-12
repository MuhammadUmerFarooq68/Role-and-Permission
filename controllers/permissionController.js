// const { Permission, User } = require('../models');
const Permission = require('../models/Permission');
const User = require ('../models/user')

exports.createPermission = async (req, res) => {
  try {
    const adminUser = await User.findByPk(req.user.id);
    if (adminUser && adminUser.isAdmin) {
      const { name, parentId } = req.body;

      // Validate if parentId is provided and exists
      if (parentId) {
        const parentPermission = await Permission.findByPk(parentId);
        if (!parentPermission) {
          return res.status(400).json({ message: 'Invalid parentId: Permission not found' });
        }
      }

      // Create the new permission
      const permission = await Permission.create({ name, parentId });
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
      // Fetch top-level parent permissions
      const permissions = await Permission.findAll({
        where: { parentId: null },
        include: [
          {
            model: Permission,
            as: 'children'
          }
        ]
      });
      const formattedPermissions = permissions.map(permission => {
        return {
          id: permission.id,
          name: permission.name,
          children: permission.children.map(child => ({
            id: child.id,
            name: child.name
          }))
        };
      });

      res.status(200).json(formattedPermissions);
    } else {
      res.status(403).json({ message: 'Forbidden: Admin rights required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};