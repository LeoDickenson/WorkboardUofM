const router = require('express').Router();
//homepage, {user} is a placeholder 
router.get('/', async (req, res) => {
    res.render('login');
});
//dashboard route, user is placeholder
router.get('/dashboard', async (req, res) => {
    return res.render('main');
});

module.exports = router;
