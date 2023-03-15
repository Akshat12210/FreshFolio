const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  freelancer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  delivery_time: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  answers: {
    type: [String]
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;