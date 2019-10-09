const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const Video = require("../models/Video");
const { check, validationResult } = require("express-validator");

// @route   GET api/videos
// @desc    Get videos
// @access  Public
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find().sort({ dateCreated: 1 });
    res.json(videos);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error, try again later please. If this keeps happening, please contact the manager"
      );
  }
});

module.exports = router;
