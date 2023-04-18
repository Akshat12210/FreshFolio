const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  short_description: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  learnings: {
    type: String,
    required: true
  },
  skills_used: {
    type: [String],
    required: true
  },
  accepted_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer',
    required :false

  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
