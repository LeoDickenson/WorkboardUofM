const router = require('express').Router();
const signupRoute = require('./signup');
// const projectRoutes = require('./projectRoutes');
const timesheetRoute = require('./timesheet');

router.use('/signup', signupRoute);
// router.use('/schedule', scheduleRoute);
router.use('/timesheet', timesheetRoute);

module.exports = router;