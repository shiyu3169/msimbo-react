var mongoose = require("mongoose");

var ImageSchema = mongoose.Schema({
  name: String,
  data: Buffer,
  mimetype: String,
  type: String,
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("images", ImageSchema);
