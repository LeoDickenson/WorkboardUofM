const sequelize = require('../config/connection');
const seedAdmin = require('./adminData');
const seedRole = require('./roleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAdmin();

  await seedRole();

  process.exit(0);
};

seedAll();