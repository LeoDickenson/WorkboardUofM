const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/', baseRoute);
router.use('/schedule', scheduleRoute);

module.exports = router;

//****EXAMPLE "api/index.js" FROM UNIT 14 ACTIVITY 17 ***/
// const router = require('express').Router();

// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);

// module.exports = router;