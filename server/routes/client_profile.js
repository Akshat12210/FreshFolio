const express = require('express');
const router = express.Router();
const Profile = require('../models/client');
const User = require('../models/user');


// Create a new profile
router.post('/', async (req, res) => {
  console.log(req.body)
  const createProfile = async (userId, data) => {
    try {
      const profile = new Profile({
        user_id: req.body.user_id,
        company_name: req.body.company_name,
        website: req.body.website,
        industry: req.body.industry,
        location: req.body.location
      });
      await profile.save();
      await User.updateOne({_id: userId}, { $set: { profile_created: true } });
      return profile;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { user_id, data } = req.body;
  try {
    const profile = await createProfile(user_id, data);
    await User.findByIdAndUpdate(user_id, { profile_created: true });
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});


// Get a profile by ID
router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
  try {
    const profile = await Profile.findOne({user_id});
    if (!profile) {
      return res.status(404).send("Profile Does Not Exists");
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
