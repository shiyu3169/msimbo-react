const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Image = require("../models/Image");
const User = require("../models/User");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "./client/build/static/media/upload" });

// @route   POST api/image
// @desc    Add new grade
// @access  Private
router.post("/:id", [auth, upload.single("file")], async (req, res) => {
  const userId = req.params.id;
  const image = req.file;
  const newImage = {
    name: image.path,
    data: "",
    mimetype: image.mimetype
  };
  fs.readFile(newImage.name, async (err, data) => {
    if (err) throw err;
    newImage.data = data;
    const newImg = await Image.create(newImage);
    await User.findByIdAndUpdate(userId, { $set: { image: newImg._id } });
    fs.unlink(newImage.name, () => {
      res.json({ msg: "image uploaded" });
    });
  });
});

module.exports = router;
