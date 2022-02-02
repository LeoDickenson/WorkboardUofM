const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model { }

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    is_manager: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;