// const { UserRole, RolePermission, Permission } = require('../models');
const UserRole =  require ('../models/userRole')
const Permission = require ('../models/Permission');
const RolePermission = require ('../models/rolePermission');

module.exports = permissionName => async (req, res, next) => {
  try {
    const userRoles = await UserRole.findAll({ where: { userId: req.user.id } });
    const roleIds = userRoles.map(ur => ur.roleId);
    
    const rolePermissions = await RolePermission.findAll({ where: { roleId: roleIds } });
    const permissionIds = rolePermissions.map(rp => rp.permissionId);
    
    const permissions = await Permission.findAll({ where: { id: permissionIds } });
    const permissionNames = permissions.map(p => p.name);

    if (permissionNames.includes(permissionName)) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
