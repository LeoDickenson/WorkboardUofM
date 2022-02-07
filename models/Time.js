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
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'time',
    }
);

module.exports = Time;