const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/role');
const permissionRoutes = require('./routes/permission');
const rolePermissionRoutes = require('./routes/rolePermission');

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json()); 

// Set up routes
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/roles/permissions', rolePermissionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

sequelize.sync({ alter: false}).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

