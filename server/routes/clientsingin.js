const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./user');
const ClientProfile = require('./client');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });

  res.json({ token });
});

app.listen(3000, () => console.log('Server started on port 3000'));
