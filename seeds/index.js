const sequelize = require('../config/connection');
const seedAdmin = require('./adminData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAdmin();

  process.exit(0);
};

seedAll();