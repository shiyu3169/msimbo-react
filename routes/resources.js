const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const Resource = require("../models/Resource");
const { check, validationResult } = require("express-validator");

// @route   GET api/resources
// @desc    Get Resources
// @access  Public
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find().sort({ name: 1 });
    res.json(resources);
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
