const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!'
  };

  res.send(data);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});