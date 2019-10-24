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

// @route   POST api/resources
// @desc    Add Resources
// @access  Private - admin
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
      const newResource = new Resource({ ...req.body });
      const resource = await newResource.save();
      res.json(resource);
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

// @route   DELETE api/resources/:id
// @desc    Delete resource
// @access  Private - admin
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ msg: "Resource not found" });
    }
    await Resource.findByIdAndRemove(req.params.id);
    res.json({ msg: "Resource removed" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error. Try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route   PUT api/resources/:id
// @desc    Update resource
// @access  Private - admin
router.put(
  "/:id",
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
      // Build updated resource
      const updatedResource = new Resource({ ...req.body });
      // find the old resource
      let resource = await Resource.findById(req.params.id);
      // Update the existing resource
      resource = await Resource.findByIdAndUpdate(
        req.params.id,
        { $set: updatedResource },
        // If the editing resource is deleted, make a new one
        { new: true }
      );
      res.json(resource);
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
