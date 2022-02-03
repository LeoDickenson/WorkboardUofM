// CHANGE THIS GET BECAUSE THIS IS NOW OUR HOME ROUTE
const router = require('express').Router();
//login page get
router.get('/', async (req, res) => {
    res.render('signup',);
});

//signup post
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      // TODO: Set up sessions with the 'loggedIn' variable
      req.session.save(() => {
        // TODO: Set the 'loggedIn' session variable to 'true'
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//sign in post
router.post('/', async (req, res) => {
    try {
      const dbUserData = await Employee.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
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

module.exports = router;
