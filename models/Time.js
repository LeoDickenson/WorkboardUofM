const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Time extends Model { }

Time.init(
    {
        clockin_time:  {
            type: DataTypes.TIME,
            allowNull: false,
        },
        clockout_time: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'time',
    }
);

module.exports = Time;