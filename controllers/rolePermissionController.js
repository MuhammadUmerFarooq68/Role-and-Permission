// const { Role, Permission, RolePermission, User } = require('../models');
const Role = require ('../models/role');
const Permission = require ('../models/Permission');
const RolePermission = require ('../models/rolePermission');
const User = require ('../models/user')
exports.assignPermissionToRole = async (req, res) => {
  try {
    const adminUser = await User.findByPk(req.user.id);
    if (adminUser && adminUser.isAdmin) {
      const { roleId, permissionId } = req.body;
      const role = await Role.findByPk(roleId);
      const permission = await Permission.findByPk(permissionId);

      if (!role || !permission) {
        return res.status(404).json({ message: 'Role or Permission not found' });
      }

      await RolePermission.create({ roleId, permissionId });
      res.status(201).json({ message: 'Permission assigned to role' });
    } else {
      res.status(403).json({ message: 'Forbidden: Admin rights required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
