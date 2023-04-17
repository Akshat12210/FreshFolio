const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Proposal = require('../models/proposal');
const Team = require('../models/team');

// Create a new team

function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 6;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  }
router.post('/', async (req, res) => {
  try {
    const code = generateCode(); // generate a unique code for the new team
    const team = new Team({
      job_id: req.body.job_id,
      proposal_id: req.body.proposal_id,
      code: code,
      members: [req.body.user_id], // add the user who created the team as a member
      skills: req.body.skills
    });
    await team.save();
    res.status(201).send(team.code);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Update a team by ID
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['job_id', 'user_id', 'code', 'members', 'skills'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  const _id = req.params.id;
  try {
    const team = await Team.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if (!team) {
      return res.status(404).send();
    }
    res.send(team);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add a member to a team by code
router.post('/:id/members', async (req, res) => {
    const teamId = req.params.id;
    const userId = req.body.user_id;
    const code = req.body.code;
  
    try {
      const team = await Team.findById(teamId);
      if (!team) {
        return res.status(404).send({ error: 'Team not found!' });
      }
  
      // Check if the provided code matches the team's code
      if (team.code !== code) {
        return res.status(400).send({ error: 'Invalid team code!' });
      }
  
      // Check if the user is already a member of the team
      if (team.members.includes(userId)) {
        return res.status(400).send({ error: 'User is already a member of the team!' });
      }
  
      // Add the new member to the team and save it
      team.members.push(userId);
      await team.save();
  
      res.send(team);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

// Delete a member from a team by user ID
router.delete('/:id/members/:user_id', async (req, res) => {
  const teamId = req.params.id;
  const userId = req.params.user_id;
  try {
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).send({ error: 'Team not found!' });
    }
    // check if the user is a member of the team
    if (!team.members.includes(userId)) {
      return res.status(400).send({ error: 'User is not a member of the team!' });
    }
    // remove the user from the team and save it
    team.members = team.members.filter(memberId => memberId !== userId);
    await team.save();
    res.send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
