const express = require('express');
const router = express.Router();
const Job = require('../models/job');

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
        status: 'open'
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
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'description', 'budget', 'category', 'deadline', 'freelancer_id', 'skills_required', 'status', 'bids', 'questions'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  const _id = req.params.id;
  try {
    const job = await Job.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if (!job) {
      return res.status(404).send();
    }
    res.send(job);
  } catch (error) {
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

module.exports = router;
