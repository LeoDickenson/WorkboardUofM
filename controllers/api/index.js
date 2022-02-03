const router = require('express').Router();
const signupRoute = require('./signup');
// const projectRoutes = require('./projectRoutes');

router.get('/', signupRoute);
// router.use('/schedule', scheduleRoute);

module.exports = router;

//****EXAMPLE "api/index.js" FROM UNIT 14 ACTIVITY 17 ***/
// const router = require('express').Router();

// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);

// module.exports = router;