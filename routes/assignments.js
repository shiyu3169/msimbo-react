const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Assignment = require("../models/Assignment");
const { check, validationResult } = require("express-validator");

// @route   GET api/assignments
// @desc    Get Assignments
// @access  Public
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error, try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route   POST api/assignments
// @desc    Add new Assignment
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("src", "Source is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array()[0].msg);
    }
    try {
      const newAssignment = new Assignment({ ...req.body });
      const assignment = await newAssignment.save();
      res.json(assignment);
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send(
          "Server Error, try again later please. If this keeps happening, please contact the manager"
        );
    }
  }
);

module.exports = router;
