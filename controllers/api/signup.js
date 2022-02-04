const { response } = require('express');
const Employee = require('../../models/employee');
const router = require('express').Router();

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../../utils/fsUtils');

// CHANGE THIS GET BECAUSE THIS IS NOW OUR HOME ROUTE
//login page get
// router.get('/', async (req, res) => {
//     res.render('signup');
// });

//signup post
router.post('/', async (req, res) => {
  try {
    const dbUserData = await Employee.create({
      employee_firstname: req.body.employee_firstname,
      employee_lastname: req.body.employee_lastname,
      employee_email: req.body.employee_email,
      employee_password: req.body.employee_password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.post('/', async (req, res) => {
//     console.log(req.body);

//     const { employee_firstname, employee_lastname, employee_email, employee_password } = await req.body;
//     console.log(req.body);
//     if (req.body) {
//       const newUser = {
//         employee_firstname,
//         employee_lastname,
//         employee_email,
//         employee_password
//       };

//       readAndAppend(newUser, './db/employees.json');
//       res.send('Success!');
//     //   console.log(newUser)
//     } else {
//       console.error();
//     }
// });

//THIS ROUTE GETS THE DATA AND DISPLAYS IT 
// router.get('/', (req, res) => {
//   readFromFile('./db/employees.json').then((data) => res.json(JSON.parse(data)));
// });

// sign in post
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Employee.findOne({
      where: {
        email: req.body.employee_email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.employee_password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
