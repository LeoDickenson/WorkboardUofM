const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    //***CHANGED PORT FROM 3306 TO 3333 ***/
    port: 3306,
  }
);

module.exports = sequelize;

//***CODE PULLED FROM ACTIVITY 17 UNIT 14 ***/