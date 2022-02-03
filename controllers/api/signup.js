const Employee = require('../../models/employee');
const router = require('express').Router();

const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../../utils/fsUtils');  

// CHANGE THIS GET BECAUSE THIS IS NOW OUR HOME ROUTE
//login page get
// router.get('/', async (req, res) => {
//     res.render('signup');
// });

//signup post
// router.post('/', async (req, res) => {
//     try {
//         const dbUserData = await Employee.create({
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             employee_email: req.body.employee_email,
//             employee_username: req.body.employee_username,
//             employee_password: req.body.employee_password,
//         });

//         req.session.save(() => {
//             req.session.loggedIn = true;
//             res.status(200).log('test');
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.post('/', async (req, res) => {
    console.log(req.body);
  
    const { firstname, lastname, username, email, password } = await req.body;
    console.log(req.body);
    if (req.body) {
      const newUser = {
        firstname,
        lastname,
        username,
        email,
        password,
      };
  
      readAndAppend(newUser, './db/employees.json');
    //   console.log(newUser)
    } else {
      console.error();
    }
});
//sign in post
// router.post('/', async (req, res) => {
//     try {
//       const dbUserData = await Employee.findOne({
//         where: {
//           email: req.body.email,
//         },
//       });

//       if (!dbUserData) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password. Please try again!' });
//         return;
//       }

//       const validPassword = await dbUserData.checkPassword(req.body.password);

//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password. Please try again!' });
//         return;
//       }

//       req.session.save(() => {
//         req.session.loggedIn = true;
//         res
//           .status(200)
//           .json({ user: dbUserData, message: 'You are now logged in!' });
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

module.exports = router;
