const router = require('express').Router();
const signupRoute = require('./signup');
// const projectRoutes = require('./projectRoutes');

router.use('/signup', signupRoute);
// router.use('/schedule', scheduleRoute);

module.exports = router;