const express = require('express');
const router = express.Router();
const Job = require('../models/proposal');
const Proposal = require('../models/proposal');

// Create a new proposal 
router.post('/', async (req, res) => {
  try {
    const proposal = new Proposal({
        job_id:req.body.job_id,
        freelancer_id:req.body.freelancer_id,
        amount:req.body.amount ,
        delivery_time: req.body.delivery_time,
        description: req.body.description,
        answer:req.body.answer,
        
    });
    await proposal.save();
    res.status(201).send(proposal.id);
  } catch (error) {
    res.status(400).send(error);
  }
});

// // Get all proposals
router.get('/', async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.send(proposals);
  } catch (error) {
    res.status(500).send(error);
  }
});

// // Get a job by ID
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const proposal = await Proposal.findById(_id);
    if (!proposal) {
      return res.status(404).send();
    }
    res.send(proposal);
  } catch (error) {
    res.status(500).send(error);
  }
});

// // Update a job by ID
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
