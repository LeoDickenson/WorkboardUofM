const router = require('express').Router();
// const { User, Timesheet } = require('../models'); THIS IS A PLACEHOLDER FOR OUR MODELS 

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('welcome');
});

module.exports = router;
