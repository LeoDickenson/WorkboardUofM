const Role = require('../models/Role');

const roledata = [
    {
       role_name: 'Junior Developer',
       role_pay: 60000,
    },
    {
        role_name: 'Manager',
        role_pay: 120000,
     },
];

const seedRole = () => Role.bulkCreate(roledata);

module.exports = seedRole;