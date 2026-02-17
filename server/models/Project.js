const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  technologies: [String],
  link: {
    type: String,
  },
  github: {
    type: String,
  },
  category: {
    type: String,
    enum: ['web-app', 'mobile-app', 'data-science', 'ai-ml'],
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', projectSchema);
