const express = require('express');
const router = express.Router();
const Job = require('../models/job');



router.get('/totaljob/:id', async (req, res) => {
    const clientId = req.params.id;
    try {
      const jobs = await Job.find({ client_id: clientId });
      const totalJobs = jobs.length;
      res.send({ totalJobs });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  module.exports = router;