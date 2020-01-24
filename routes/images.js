const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Image = require('../models/Image');
const User = require('../models/User');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: './client/build/static/media/upload' });

// @route   POST api/image
// @desc    Add new image
// @access  Private
router.post('/:id', [auth, upload.single('file')], async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const oldImage = user.image;
  if (oldImage) {
    await Image.findByIdAndRemove(oldImage);
  }
  const image = req.file;
  const newImage = {
    name: image.path,
    data: '',
    mimetype: image.mimetype
  };
  fs.readFile(newImage.name, async (err, data) => {
    if (err) throw err;
    newImage.data = data;
    const newImg = await Image.create(newImage);
    await User.findByIdAndUpdate(userId, { $set: { image: newImg._id } });
    fs.unlink(newImage.name, () => {
      res.json(newImg);
    });
  });
});

module.exports = router;
