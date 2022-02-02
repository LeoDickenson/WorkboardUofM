const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_pay: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'employee',
          key: 'id',
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports = Role;