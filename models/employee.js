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
    employee_email: {
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
    // role_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'role',
    //     key: 'id',
    // }
    // },
    // hooks: {
    //   async beforeCreate(newUserData) {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;