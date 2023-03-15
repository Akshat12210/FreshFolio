const mongoose = require('mongoose');

const FreelancerProfileSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: {
    type: [String]
  },
  certifications: {
    type: [String]
  },
  experience: {
    type: String
  },
  hourly_rate: {
    type: Number
  },
  availability: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  rating: {
    type: Number,
    default: 0
  }
});

const FreelancerProfile = mongoose.model('FreelancerProfile', FreelancerProfileSchema);

module.exports = FreelancerProfile;