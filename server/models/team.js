const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  proposal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proposal',
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  members: {
    type: [String],
    required: true
  },
  skills: {
    type: [String],
    
  }
});

const Team = mongoose.model('Team', teamSchema);


module.exports = Team;

