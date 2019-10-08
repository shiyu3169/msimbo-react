const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");

// @route GET api/users
// @desc Get all users
// @access Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ firstName: 1 });
    res.json(users);
  } catch (error) {
    console.error(err.message);
    res
      .status(500)
      .send(
        "Server Error. Try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route GET api/users/:id
// @desc Get user by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error. Try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0] });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      user = new User({ name, email, password });
      // const salt = await bcrypt.genSalt(10);
      // user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: "1d"
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .send(
          "Server Error. Try again later please. If this keeps happening, please contact the manager"
        );
    }
  }
);

// @route   DELETE api/users
// @desc    remove a user
// @access  Private
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    await User.findByIdAndRemove(req.params.id);
    res.json({ msg: "Student removed" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(
        "Server Error. Try again later please. If this keeps happening, please contact the manager"
      );
  }
});

// @route   PUT api/users
// @desc    update a user
// @access  Private
router.put(
  "/:id",
  [
    auth,
    [
      check("email", "Email is required")
        .not()
        .isEmpty(),
      check("firstName", "First name is required")
        .not()
        .isEmpty(),
      check("lastName", "Last name is required")
        .not()
        .isEmpty(),
      check("linkedin", "LinkedIn link is required")
        .not()
        .isEmpty(),
      check("github", "GitHub link is required")
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
      // Build updated user
      const updatedUser = new User({ ...req.body });
      // find the old user
      let user = await User.findById(req.params.id);
      // Update the existing assignment
      user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: updatedUser },
        // If the editing user is deleted, make a new one
        { new: true }
      );
      res.json(user);
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
