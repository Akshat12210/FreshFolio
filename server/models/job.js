const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  created_at: { 
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  freelancer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer'
  },
  skills_required: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['open', 'in progress', 'completed', 'cancelled'],
    default: 'open'
  },
  bids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bid'
  }],
  questions: [{
    type: String
  }]
});
proposals: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Proposal'
}];


jobSchema.virtual('proposalCount', {
  ref: 'Proposal',
  localField: '_id',
  foreignField: 'job_id',
  count: true
});

module.exports = mongoose.model('Job', jobSchema);
