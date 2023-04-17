// Require necessary dependencies
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Create a router instance
const router = express.Router();

// Route for user sign-up



router.get('/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("User does not exist");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName, account_type } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please provide username, email, and password' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      username,
      first_name: firstName,
      last_name: lastName,
      account_type
    });
    await user.save();
    res.status(201).json({ message: 'User created!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route for user sign-in
//login

// Route for user sign-in
//login
router.post('/login', async (req, res, next) => {
  console.log(req.body)
  let fetchedUser;
  // Find the user in the database by email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      // Compare the password entered with the hashed password in the database
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      // Generate a JWT token with the user's id and email
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id, account_type: fetchedUser.account_type },
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODc1ODI5MCwiaWF0IjoxNjc4NzU4MjkwfQ.JgOmfxlF2t6F8Z696j5AGNdmg_w8IfmNaXHCuh6Oq-8",
        { expiresIn: '1h' }
      );
      res.status(200).json({
        message: 'Auth successful',
        userId: fetchedUser._id,
        account_type: fetchedUser.account_type,
        token: token
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Auth failed'
      });
    });
});

// router.post('/login', async (req, res, next) => {
//     console.log(req.body)
//   let fetchedUser;
//   // Find the user in the database by email
//   User.findOne({ email: req.body.email })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({
//           message: 'Auth failed'
//         });
//       }
//       // Compare the password entered with the hashed password in the database
//       fetchedUser = user;
//       bcrypt.compare(req.body.password, user.password);
//     })
//     .then(result => {
//       if (!result) {
//         return res.status(401).json({
//           message: 'Auth failed'
//         });
//       }
//       // Generate a JWT token with the user's id and email
//       const token = jwt.sign(
//         { email: fetchedUser.email, userId: fetchedUser._id },
//         "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODc1ODI5MCwiaWF0IjoxNjc4NzU4MjkwfQ.JgOmfxlF2t6F8Z696j5AGNdmg_w8IfmNaXHCuh6Oq-8",
//         { expiresIn: '1h' }
//       );
//       res.status(200).json({
//         token: token
//       });
//     })
//     .catch(err => {
//       return res.status(401).json({
//         message: 'Auth failed'
//       });
//     });
// });

// Export the router
module.exports = router;
