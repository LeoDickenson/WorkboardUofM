// here enter a few dummy useres including a manager
// maybe create an admin user that has manager credentials (something the company IT guy would use)

const Employee = require('../models/employee');

const userdata = [
    {
    id: 1,
    employee_firstname: 'admin',
    employee_lastname: 'login',
    employee_email: 'admin@workboard.com',
    employee_password: 'admin1234',
    is_manager: true,
    },
];

const seedAdmin = () => Employee.bulkCreate(userdata);

module.exports = seedAdmin;