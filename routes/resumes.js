const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Resume = require('../models/Resume');
const User = require('../models/User');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: './client/build/static/media/upload' });

// @route   POST api/resume
// @desc    Add New Resume
// @access  Private
router.post('/:id', [auth, upload.single('file')], async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const oldResume = user.resume;
  if (oldResume) {
    await Resume.findByIdAndRemove(oldResume);
  }
  const newResume = {
    name: req.file.path,
    data: '',
    mimetype: req.file.mimetype
  };
  fs.readFile(newResume.name, async (err, data) => {
    if (err) throw err;
    newResume.data = data;
    const resume = await Resume.create(newResume);
    await User.findByIdAndUpdate(userId, { $set: { resume: resume._id } });
    fs.unlink(newResume.name, () => {
      res.json(resume);
    });
  });
});

module.exports = router;
