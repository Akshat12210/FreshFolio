const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const url = "mongodb+srv://deeksha:xlwtfH6vU5gIf7Tj@cluster0.3a5fexm.mongodb.net/?retryWrites=true&w=majority";
const userRoutes = require('./routes/user');
const jobRoutes = require('./routes/job_post');

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url, connectionParams).then(() => {
  console.log('MongoDB Connected');
}).catch(err => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/api/user', userRoutes);
app.use('/api/jobs', jobRoutes);

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!'
  };

  res.send(data);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});