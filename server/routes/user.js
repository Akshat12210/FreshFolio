// Require necessary dependencies
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Create a router instance
const router = express.Router();

// Route for user sign-up
router.post('/signup', (req, res, next) => {
console.log(req.body)
  // Hash the password
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      // Create a new user object
      const user = new User({
        email: req.body.email,
        password: hash,
        username:req.body.username,
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        account_type:req.body.account_type
      });
      // Save the user to the database
      user.save()
        .then(result => {
          res.status(201).json({
            message: 'User created!'
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
});

// Route for user sign-in
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
      bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      // Generate a JWT token with the user's id and email
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODc1ODI5MCwiaWF0IjoxNjc4NzU4MjkwfQ.JgOmfxlF2t6F8Z696j5AGNdmg_w8IfmNaXHCuh6Oq-8",
        { expiresIn: '1h' }
      );
      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Auth failed'
      });
    });
});

// Export the router
module.exports = router;
