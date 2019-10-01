const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");

// @route   GET api/assignments
// @desc    Get Assignments
// @access  Public
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
