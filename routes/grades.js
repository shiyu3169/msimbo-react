const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const auth = require("../middleware/auth");
const Grade = require("../models/Grade");

// @route   GET api/grades
// @desc    Get Grades by user
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    console.log(req.user);
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

module.exports = router;
