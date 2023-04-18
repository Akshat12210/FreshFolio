const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Proposal = require('../models/proposal');


// Create a new job
router.post('/', async (req, res) => {
  try {
    const job = new Job({
        client_id:req.body.client_id,
        title:req.body.title,
        description:req.body.description ,
        budget: req.body.budget,
        category: req.body.category,
        deadline: new Date('2023-04-01'),
        skills_required: ['Some skill', 'Another skill'],
        status: 'open',
        
    });
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a job by ID
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const job = await Job.findById(_id);
    if (!job) {
      return res.status(404).send();
    }
    res.send(job);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a job by ID
// Update a job by ID
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'description', 'budget', 'category', 'deadline', 'freelancer_id', 'skills_required', 'status', 'bids', 'questions', 'proposal_id'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  const _id = req.params.id;
  try {
    const job = await Job.findById(_id);
    if (!job) {
      return res.status(404).send();
    }
    if (req.body.freelancer_id) {
      const proposal = await Proposal.findOne({ job_id: _id, freelancer_id: req.body.freelancer_id });
      if (!proposal) {
        return res.status(400).send({ error: 'Invalid freelancer_id!' });
      }
      job.accepted_id = proposal._id;
    }
    if (req.body.proposal_id) {
      job.proposal_id = req.body.proposal_id;
    }
    updates.forEach((update) => job[update] = req.body[update]);
    job.updated_at = Date.now();
    await job.save();
    res.send(job);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});



// Delete a job by ID
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const job = await Job.findByIdAndDelete(_id);
    if (!job) {
      return res.status(404).send();
    }
    res.send(job);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get jobs by client id 

router.get('/client/:id/jobs', async (req, res) => {
  const clientId = req.params.id;
  try {
    const jobs = await Job.find({ client_id: clientId });
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});




module.exports = router;
