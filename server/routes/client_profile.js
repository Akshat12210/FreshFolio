const express = require('express');
const router = express.Router();
const Profile = require('../models/client');

// Create a new profile
router.post('/', async (req, res) => {
  const createProfile = async (userId, data) => {
    try {
      const profile = new Profile({
        user_id: req.body.user_id, // corrected field name
        company_name: req.body.company_name,
        website: req.body.website,
        industry: req.body.industry,
        location: req.body.location
      });
      await profile.save();
      return profile;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { userId, data } = req.body;
  try {
    const profile = await createProfile(userId, data);
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a profile by ID
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const profile = await Profile.findById(_id);
    if (!profile) {
      return res.status(404).send();
    }
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a profile by ID
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['company_name', 'website', 'industry', 'location'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  const _id = req.params.id;
  try {
    const profile = await Profile.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if (!profile) {
      return res.status(404).send();
    }
    res.send(profile);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});

// Delete a profile by ID
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const profile = await Profile.findByIdAndDelete(_id);
    if (!profile) {
      return res.status(404).send();
    }
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
