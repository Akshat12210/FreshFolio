const mongoose = require('mongoose');

const clientProfileSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company_name: { type: String, required: true },
  website: { type: String },
  industry: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  location: { type: String },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

const ClientProfile = mongoose.model('ClientProfile', clientProfileSchema);

module.exports = ClientProfile;
