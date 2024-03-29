const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const url = process.env.MONGODB_URL;
const userRoutes = require('./routes/user');
const jobRoutes = require('./routes/job_post');
const clientprofile=require('./routes/client_profile');
const freelancerprofile=require('./routes/freelancer_profile');
const client_matrix=require('./routes/client_matrix');
const proposal=require('./routes/proposal');
const team=require('./routes/team');





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
app.use('/api/client_profile', clientprofile);
app.use('/api/freelancer_profile', freelancerprofile);
app.use('/api/proposal', proposal);
app.use('/api/team', team);




app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!'
  };

  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log('Server started on port 3001');
});