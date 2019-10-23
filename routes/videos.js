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

// @route   POST api/videos
// @desc    Add new Video
// @access  Private - admin
router.post(
  "/",
  [
    adminAuth,
    [
      [
        check("name", "Name is required")
          .not()
          .isEmpty(),
        check("src", "Video URL is required")
          .not()
          .isEmpty()
      ]
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array()[0]);
    }

    try {
      const newVideo = new Video({ ...req.body });
      const video = await newVideo.save();
      res.json(video);
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send(
          "Server Error. Try again later please. If this keeps happening, please contact the manager"
        );
    }
  }
);

// @route   DELETE api/videos/:id
// @desc    Remove video
// @access  Private - admin
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    // if can't find video in database
    if (!video) {
      return res.status(404).json({ msg: "Assignment not found" });
    }
    await Video.findByIdAndRemove(req.params.id);
    res.json({ msg: "Video removed" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error. Try again later please. If this keeps happening, please contact the manager"
      );
  }
});

module.exports = router;
