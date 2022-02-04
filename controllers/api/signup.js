const { response } = require('express');
const Employee = require('../../models/employee');
const router = require('express').Router();

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../../utils/fsUtils');

//signup post
router.post('/create', async (req, res) => {
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

// sign in post
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Employee.findOne({
      where: {
        employee_email: req.body.employee_email,
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

router.post('/logout', (req, res) => {
  // When the user logs out, the session is destroyed
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
