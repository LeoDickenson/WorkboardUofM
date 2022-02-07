const Employee = require('../models/Employee');

const router = require('express').Router();

router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('login');
  //   return;
  // }
  res.render('signup');
});

// router.get('/dashboard/:id', async (req, res) => {
//   try {
//     const dbLoginData = await Login.findByPk(req.params.id, {
//       include: [
//         {
//           model: Employee,
//           attributes: [
//             'id',
//             'employee_firstname',
//             'employee_lastname',
//             'employee_email',
//             'employee_password',
//           ],
//         },
//       ],
//     });

//     const login = dbLoginData.get({ plain: true });
//     res.render('dashboard', {
//       login,
//       // We are not incrementing the 'countVisit' session variable here
//       // but simply sending over the current 'countVisit' session variable to be rendered
//       countVisit: req.session.countVisit,
//       isLoggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/timesheet', async (req, res) => {
  res.render('timeclock');
});

module.exports = router;
