const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");
  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    const user = await User.findById(req.user.id);
    if (!user.admin) {
      return res
        .status(401)
        .json({ msg: "This function is only available for administrator" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      msg: "Authentication failed, please reload the page and try it again."
    });
  }
};
