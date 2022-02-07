const Employee = require('../models/Employee');

const router = require('express').Router();

router.get('/', (req, res) => {
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
    res.render('signup');
});

// router.get('/', async (req, res) => {
//     try {
//       const dbLoginData = await Login.findAll({
//         include: [
//           {
//             model: Employee,
//             attributes: ['id', 'employee_firstname', 'employee_lastname'],
//           },
//         ],
//       });
  
//       const logins = dbLoginData.map((login) =>
//         login.get({ plain: true })
//       );
  
//       req.session.save(() => {
//         // We set up a session variable to count the number of times we visit the homepage
//         if (req.session.countVisit) {
//           // If the 'countVisit' session variable already exists, increment it by 1
//           req.session.countVisit++;
//         } else {
//           // If the 'countVisit' session variable doesn't exist, set it to 1
//           req.session.countVisit = 1;
//         }
  
//         res.render('homepage', {
//           logins,
//           // We send over the current 'countVisit' session variable to be rendered
//           countVisit: req.session.countVisit,
//           isLoggedIn: req.session.loggedIn
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

  router.get('/dashboard/:id', async (req, res) => {
    try {
      const dbLoginData = await Login.findByPk(req.params.id, {
        include: [
          {
            model: Employee,
            attributes: [
              'id',
              'employee_firstname',
              'employee_lastname',
              'employee_email',
              'employee_password',
            ],
          },
        ],
      });
  
      const login = dbLoginData.get({ plain: true });
      res.render('dashboard', {
        login,
        // We are not incrementing the 'countVisit' session variable here
        // but simply sending over the current 'countVisit' session variable to be rendered
        countVisit: req.session.countVisit,
        isLoggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
