// const router = require('express').Router();
// // const { User, Timesheet } = require('../models'); THIS IS A PLACEHOLDER FOR OUR MODELS 

// router.get('/login', (req, res) => {
//     // If the user is already logged in, redirect to the homepage
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     // Otherwise, render the 'login' template
//     res.render('welcome');
// });

// module.exports = router;

const router = require('express').Router();
//homepage, {user} is a placeholder 
router.get('/', async (req, res) => {
    res.render('login',);
});
//dashboard route, user is placeholder
// router.get('/dashboard', async (req, res) => {
//     return res.render('main');
// });

module.exports = router;
