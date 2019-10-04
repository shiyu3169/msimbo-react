const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
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
    adminAuth,
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
      return res.status(400).json(errors.array()[0]);
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

// @route   DELETE api/assignments
// @desc    Delete assignment
// @access  Private
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ msg: "Assignment not found" });
    }
    await Assignment.findByIdAndRemove(req.params.id);
    res.json({ msg: "Assignment removed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
