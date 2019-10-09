const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/auth");
const Grade = require("../models/Grade");
const { check, validationResult } = require("express-validator");

// @route   GET api/grades
// @desc    Get Grades by user
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    // Make sure user owns grades or user is admin
    if (req.params.id !== req.user.id && !req.user.admin) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const grades = await Grade.find({ user: req.params.id }).sort({
      dateCreated: -1
    });
    res.json(grades);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error, try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route   POST api/grades
// @desc    Add new grade
// @access  Private
router.post(
  "/",
  [
    adminAuth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("score", "Score is required")
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
      const newGrade = new Grade({ ...req.body });
      const grade = await newGrade.save();
      res.json(grade);
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

// @route   DELETE api/grades/:id
// @desc    Remove grade
// @access  Private - admin
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    // If the grade deosn't exist in the database
    if (!grade) {
      return res.status(404).json({ msg: "Grade not found" });
    }
    await Grade.findByIdAndRemove(req.params.id);
    res.json({ mgs: "Grade removed" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error. Try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route   UPDATE api/grades/:id
// @desc    update grade
// @access  Private - admin
router.put(
  "/:id",
  [
    adminAuth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("score", "Score is required")
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
      // Build updated grade
      const updatedGrade = new Grade({ ...req.body });
      // find the old grade
      let grade = await Grade.findById(req.params.id);
      // Update the existing grade
      grade = await Grade.findByIdAndUpdate(
        req.params.id,
        { $set: updatedGrade },
        // If the editing grade is deleted, make a new one
        { new: true }
      );
      res.json(grade);
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

module.exports = router;
