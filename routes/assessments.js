const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/auth");
const Assessment = require("../models/Assessment");
const { check, validationResult } = require("express-validator");

// @route   GET api/assessment
// @desc    Get Assessments
// @access  Public
router.get("/", async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.json(assessments);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error, try again later please. If this keeps happening, please contact the manager"
      );
  }
});
