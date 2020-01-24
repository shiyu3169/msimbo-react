var mongoose = require('mongoose');

var ResumeSchema = mongoose.Schema({
  name: String,
  data: Buffer,
  mimetype: String,
  type: String,
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('resumes', ResumeSchema);
